import React from 'react';
import Section from './section';
import ProjectCard from './projectCard';
import { projetos } from '../../dados';
import { Grid } from '@material-ui/core';
function Projects() {
  return (
    <Section title='Projetos'>
      <Grid container spacing={4}>
        {projetos.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;
