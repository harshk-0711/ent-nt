import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";

const CandidateDetailsPage = () => {
  const { jobId, candidateIndex } = useParams();
  const jobs = JSON.parse(localStorage.getItem("jobs"));
  const job = jobs[jobId];
  const [candidate, setCandidate] = useState(job.applicants[candidateIndex]);
  const navigate = useNavigate();

  // Handle status update
  const handleStatusUpdate = () => {
    const updatedJobs = [...jobs];
    updatedJobs[jobId].applicants[candidateIndex] = candidate;
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    navigate(`/candidates/${jobId}`);
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Candidate Details
      </Typography>
      <Typography variant="h6">{candidate.name}</Typography>
      <Typography>Email: {candidate.email_id}</Typography>
      <Typography>Contact: {candidate.contact_no}</Typography>
      <Typography>Experience: {candidate.experience}</Typography>
      <Typography>Skills: {candidate.skills.join(", ")}</Typography>
      <Typography>Application Date: {candidate.applied_date}</Typography>
      <Typography>Status: {candidate.status}</Typography>

      {/* Status Update */}
      <TextField
        label="Update Status"
        fullWidth
        margin="dense"
        value={candidate.status}
        onChange={(e) => setCandidate({ ...candidate, status: e.target.value })}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleStatusUpdate}
        sx={{ marginTop: "16px" }}
      >
        Update Status
      </Button>

      {/* Resume */}
      <Typography variant="h6" sx={{ marginTop: "16px" }}>
        Resume
      </Typography>
      <a href={candidate.resume_link} target="_blank" rel="noopener noreferrer">
        View/Download Resume
      </a>
    </div>
  );
};

export default CandidateDetailsPage;
