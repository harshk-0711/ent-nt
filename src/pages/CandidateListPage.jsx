import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";

const CandidateListPage = () => {
  const { jobId } = useParams();
  const jobs = JSON.parse(localStorage.getItem("jobs"));
  const job = jobs[jobId];
  const navigate = useNavigate();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Candidates for {job.role}
      </Typography>
      <Grid container spacing={3}>
        {job.applicants.map((candidate, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{candidate.name}</Typography>
                <Typography variant="body2">Application Date: {candidate.applied_date}</Typography>
                <Typography variant="body2">Status: {candidate.status}</Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginTop: "16px" }}
                  onClick={() => navigate(`/candidates/${jobId}/${index}`)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CandidateListPage;
