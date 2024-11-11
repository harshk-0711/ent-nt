import React from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const jobs = [
  { id: '1', role: 'Frontend Developer' },
  { id: '2', role: 'Backend Developer' },
  { id: '3', role: 'UI/UX Designer' },
  { id: '4', role: 'Devops Developer' },
  { id: '5', role: 'AI Engineer' },
];

const JobDropdown = ({ onSelectJob, label }) => {
  return (
    <FormControl fullWidth sx={{ marginBottom: '16px' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        defaultValue=""
        onChange={(e) => onSelectJob(e.target.value)}
        label={label}
      >
        {jobs.map((job) => (
          <MenuItem key={job.id} value={job.id}>
            {job.role}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default JobDropdown;
