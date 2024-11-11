import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Divider,
} from '@mui/material';
import JobDropdown from '../components/assessment/jobDropdown';

const jobs = [
  { id: '1', role: 'Frontend Developer' },
  { id: '2', role: 'Backend Developer' },
  { id: '3', role: 'UI/UX Designer' },
  { id: '4', role: 'Devops Developer' },
  { id: '5', role: 'AI Engineer' },
];

const AssessmentPage = () => {
  const [assessments, setAssessments] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};
    setAssessments(storedAssessments);
  }, []);

  const handleCreateForm = (jobId) => {
    navigate(`/new-form/${jobId}`);
  };

  const handleDeleteForm = (jobId, formKey) => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};
    if (storedAssessments[jobId]) {
      delete storedAssessments[jobId][formKey];
      if (Object.keys(storedAssessments[jobId]).length === 0) {
        delete storedAssessments[jobId]; // Remove jobId if no forms are left
      }
      localStorage.setItem('assessments', JSON.stringify(storedAssessments));
      setAssessments(storedAssessments);
    }
  };

  const getJobRoleForms = (jobId) => {
    const job = jobs.find((j) => j.id === jobId);
    const jobRole = job ? job.role : jobId;

    const forms = assessments[jobId] || {};
    return Object.entries(forms).map(([formKey, questions], index) => ({
      formName: `${jobRole} Form ${index + 1}`,
      questions,
      formKey,
    }));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}>
        Assessment Management
      </Typography>
      
      <JobDropdown onSelectJob={handleCreateForm} label="Select Job to Create New Form" />

      <Typography variant="h5" color="textSecondary" sx={{ marginTop: 4, fontWeight: 500 }}>
        Existing Forms
      </Typography>
      
      <Divider sx={{ my: 2 }} />

      <Grid container spacing={3} sx={{ marginTop: 2 }}>
        {Object.keys(assessments).length === 0 ? (
          <Typography variant="body1" color="textSecondary" sx={{ margin: 2, padding: 2 }}>
            No assessments created yet.
          </Typography>
        ) : (
          Object.entries(assessments).map(([jobId]) =>
            getJobRoleForms(jobId).map(({ formName, questions, formKey }) => (
              <Grid item xs={12} sm={6} md={4} key={`${jobId}-${formKey}`}>
                <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: 600 }}>
                      {formName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                      Number of Questions: {questions.length}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ mt: 1, borderRadius: '8px', px: 3 }}
                        onClick={() => navigate(`/edit-form/${jobId}/${formKey}`)}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                        size="small"
                        sx={{ mt: 1, borderRadius: '8px', px: 3 }}
                        onClick={() => handleDeleteForm(jobId, formKey)}
                      >
                        Delete
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )
        )}
      </Grid>
    </Box>
  );
};

export default AssessmentPage;
