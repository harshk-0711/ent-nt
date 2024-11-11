import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import jobData from "../components/candidates/jobData";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState(jobData.job_roles);

  useEffect(() => {
    // Fetch or update job data if needed
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#0d1b2a' }}>
      <Card sx={{ width: '85%', maxWidth: '1000px', borderRadius: '20px', boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3)', backgroundColor: '#1b263b' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: '#f0f0f0', textAlign: 'center', marginBottom: '20px' }}>
            Opportunities Dashboard
          </Typography>
          <Grid container spacing={4}>
            {jobs.map((job, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card sx={{ borderRadius: '15px', backgroundColor: '#415a77', color: '#f0f0f0', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
                  <CardContent>
                    <Typography variant="h6">{job.role}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {job.description}
                    </Typography>
                    <Button
                      variant="contained"
                      sx={{
                        marginTop: '16px',
                        backgroundColor: '#1b263b',
                        color: '#f0f0f0',
                        '&:hover': {
                          backgroundColor: '#2c3e50',
                        },
                      }}
                      onClick={() => navigate(`/candidates/${index}`)}
                    >
                      Explore Candidates
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardPage;
