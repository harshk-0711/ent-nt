import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import JobData, { addJobRole } from '../candidates/jobData';

const JobRoleForm = () => {
  const [role, setRole] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addJobRole(role, description); // Add new job role to JobData
    setSubmitted(true); // Show confirmation message
    setRole(''); // Clear form fields
    setDescription('');
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
                value={role}
                onChange={(e) => setRole(e.target.value)}
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

export default JobRoleForm;
