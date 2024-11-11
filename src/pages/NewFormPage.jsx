import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  TextField,
  Button,
  Typography,
  Radio,
  FormControlLabel,
  Grid,
  Card,
  CardContent,
  Box,
  Paper,
  Divider,
} from '@mui/material';
import { AddCircleOutline, Save } from '@mui/icons-material';

const jobs = [
  { id: '1', role: 'Frontend Developer' },
  { id: '2', role: 'Backend Developer' },
  { id: '3', role: 'UI/UX Designer' },
  { id: '4', role: 'Devops Developer' },
  { id: '5', role: 'AI Engineer' },
];

const NewFormPage = () => {
  const { jobId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOption, setCorrectOption] = useState(null);
  const navigate = useNavigate();

  const job = jobs.find((j) => j.id === jobId);
  const jobRole = job ? job.role : jobId;

  const addQuestion = () => {
    if (!questionText || correctOption === null) {
      alert('Please complete the question and select the correct answer.');
      return;
    }

    const newQuestion = { questionText, options, correctOption };
    setQuestions([...questions, newQuestion]);
    setQuestionText('');
    setOptions(['', '', '', '']);
    setCorrectOption(null);
  };

  const saveForm = () => {
    const storedAssessments = JSON.parse(localStorage.getItem('assessments')) || {};

    if (!storedAssessments[jobId]) {
      storedAssessments[jobId] = {};
    }

    const formCount = Object.keys(storedAssessments[jobId]).length;
    const newFormKey = `form-${formCount + 1}`;

    storedAssessments[jobId][newFormKey] = questions;
    localStorage.setItem('assessments', JSON.stringify(storedAssessments));

    navigate('/assessments');
  };

  return (
    <Box sx={{ padding: 4, maxWidth: 900, margin: '0 auto', backgroundColor: '#f0f4f8', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
        New Assessment for {jobRole}
      </Typography>

      <Paper elevation={3} sx={{ padding: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          Add a Question
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <TextField
          label="Question Text"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          sx={{ mb: 3 }}
        />

        <Typography variant="subtitle1" gutterBottom>
          Options
        </Typography>
        <Grid container spacing={2}>
          {options.map((option, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                variant="outlined"
                label={`Option ${index + 1}`}
                fullWidth
                value={option}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }}
                sx={{ mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Radio
                    checked={correctOption === index}
                    onChange={() => setCorrectOption(index)}
                    color="primary"
                  />
                }
                label="Correct Answer"
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddCircleOutline />}
            onClick={addQuestion}
            sx={{ px: 4 }}
          >
            Add Question
          </Button>
        </Box>
      </Paper>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
          Questions List
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {questions.length === 0 ? (
          <Typography variant="body1" color="textSecondary">
            No questions added yet.
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {questions.map((question, index) => (
              <Grid item xs={12} key={index}>
                <Card variant="outlined" sx={{ padding: 2, backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                  <CardContent>
                    <Typography variant="h6">{`Q${index + 1}: ${question.questionText}`}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Button
        variant="contained"
        color="success"
        fullWidth
        startIcon={<Save />}
        sx={{ mt: 4, py: 1.5 }}
        onClick={saveForm}
      >
        Save Assessment
      </Button>
    </Box>
  );
};

export default NewFormPage;
