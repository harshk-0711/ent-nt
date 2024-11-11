import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

const NewJobForm = ({ onJobAdded }) => {
  const [jobRole, setJobRole] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing jobs from localStorage or initialize an empty object if none exists
    const storedJobs = JSON.parse(localStorage.getItem('jobs')) || {};

    // Create a new job object with an initial number of applicants set to 0
    const newJob = {
      role: jobRole,
      description,
      applicants: []
    };

    // Add the new job to the stored jobs
    const updatedJobs = { ...storedJobs, [jobRole]: newJob };
    localStorage.setItem('jobs', JSON.stringify(updatedJobs));

    // Reset form fields
    setJobRole('');
    setDescription('');
    setSubmitted(true);

    // Notify parent component about the new job addition
    if (onJobAdded) {
      onJobAdded();
    }
  };

  return (
    <div style={{ padding: '16px', maxWidth: '500px', margin: '0 auto' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Add New Job Role
          </Typography>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <TextField
                label="Job Role"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                fullWidth
                margin="normal"
                required
              />

              <TextField
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                margin="normal"
                required
                multiline
                rows={4}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: '16px' }}
              >
                Submit
              </Button>
            </form>
          ) : (
            <div>
              <Typography variant="h6">New Job Role Added!</Typography>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: '16px' }}
                onClick={() => setSubmitted(false)}
              >
                Add Another Job Role
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default NewJobForm;
