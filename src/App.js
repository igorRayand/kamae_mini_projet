import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Container, Button, Chip, Typography, Box, Backdrop, CircularProgress } from '@mui/material';
import { useState } from 'react';

var tab = [
  {
    title: 'Introduction Cybersécurité',
    category: 'Cybersécurité',
    status: 'Victoire'
  },
  {
    title: 'Protéger son WiFi personnel',
    category: 'À la maison',
    status: 'À commencer'
  },
  {
    title: 'Je reconnais des données personnelles',
    category: 'RGPD',
    status: 'À commencer'
  },
  {
    title: 'Reconnaître un mail de phishing',
    category: 'Cybersécurité',
    status: 'Défaite'
  },
  {
    title: 'Bien utiliser son smartphone',
    category: 'À la maison',
    status: 'À commencer'
  },
  {
    title: 'Choisir un mot de passe invincible',
    category: 'Cybersécurité',
    status: 'À commencer'
  },
  {
    title: 'Limiter mon empreinte numérique',
    category: 'À la maison',
    status: 'À commencer'
  },
  {
    title: 'Pourquoi le RGPD est important',
    category: 'RGPD',
    status: 'À commencer'
  },
  {
    title: 'Introduction RGPD',
    category: 'RGPD',
    status: 'Défaite'
  }
];

const App = () => {

  const [list, setList] = useState(tab);
  const [open, setOpen] = useState(false);


  const changeState = (row) => {
    setOpen(true);
    setTimeout(() => {
      const random = Math.random();
      const i = tab.indexOf(row);
      random < 0.5 ? tab[i].status = 'Victoire' : tab[i].status = 'Défaite';
      setList([...tab]);
      setOpen(false);
    }, 300);
  };

  return (
    <Container maxWidth="md">
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box>
        <TableContainer>
          <Typography variant="h3" gutterBottom>
            Tableau des entraînements
          </Typography>
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Category</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.sort((a, b) => a.status.localeCompare(b.status)).map((row, index) => (
                <TableRow
                  key={row.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.title}
                  </TableCell>
                  <TableCell align="right">{row.category}</TableCell>
                  <TableCell align="right"><Chip label={row.status} color={ row.status === "Victoire" ? "success" : row.status === "Défaite" ? "error" : "warning" } size="small" /></TableCell>
                  <TableCell align="right"><Button onClick={() => { changeState(row) }} variant="contained" color="info" size="small" disabled={row.status === "Victoire" ? true : false}>Go</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default App;
