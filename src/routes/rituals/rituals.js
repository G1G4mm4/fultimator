import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout";

const powerPMs = {
  minor: 20,
  medium: 30,
  major: 40,
  extreme: 50,
};

const powerLDs = {
  minor: 7,
  medium: 10,
  major: 13,
  extreme: 16,
};

const powerClocks = {
  minor: 4,
  medium: 6,
  major: 6,
  extreme: 8,
};

const powerCosts = {
  minor: 100,
  medium: 200,
  major: 400,
  extreme: 800,
};

const areaPMs = {
  individual: 1,
  small: 2,
  big: 3,
  enormous: 4,
};

const areaCosts = {
  individual: 1,
  small: 2,
  big: 3,
  enormous: 4,
};

const usesCosts = {
  consumable: 1,
  permanent: 5,
};

function RitualsProjects() {
  return (
    <Layout>
      <Grid container>
        <Grid item xs={4}>
          <Rituals />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={6}>
          <Projects />
        </Grid>
      </Grid>
    </Layout>
  );
}

function Rituals() {
  const [power, setPower] = useState("minor");
  const [area, setArea] = useState("individual");

  function calcPM() {
    return powerPMs[power] * areaPMs[area];
  }

  function calcLD() {
    return powerLDs[power];
  }

  function calcClock() {
    return powerClocks[power];
  }
  return (
    <>
      <Typography variant="h4">Rituali</Typography>
      <Grid container>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Potenza</FormLabel>
            <RadioGroup
              aria-label="power"
              name="power-group"
              value={power}
              onChange={(e) => {
                setPower(e.target.value);
              }}
            >
              <FormControlLabel
                value="minor"
                control={<Radio />}
                label="Minore"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Media"
              />
              <FormControlLabel
                value="major"
                control={<Radio />}
                label="Maggiore"
              />
              <FormControlLabel
                value="extreme"
                control={<Radio />}
                label="Estrema"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Area</FormLabel>
            <RadioGroup
              aria-label="area"
              name="area-group"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="Individuale"
              />
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="Piccola"
              />
              <FormControlLabel
                value="big"
                control={<Radio />}
                label="Grande"
              />
              <FormControlLabel
                value="enormous"
                control={<Radio />}
                label="Enorme"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Divider />
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={4}>
          <Typography fontWeight="bold">{calcPM()} PM</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography fontWeight="bold">{calcLD()} LD</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography fontWeight="bold">Orologio da {calcClock()}</Typography>
        </Grid>
      </Grid>
    </>
  );
}
function Projects() {
  const [power, setPower] = useState("minor");
  const [area, setArea] = useState("individual");
  const [uses, setUses] = useState("consumable");
  const [defect, setDefect] = useState(false);
  const [tinkerers, setThinkeres] = useState(1);
  const [helpers, setHelpers] = useState(0);
  const [visionary, setVisionary] = useState(0);

  const defectMod = defect ? 0.75 : 1;
  const cost =
    powerCosts[power] * areaCosts[area] * usesCosts[uses] * defectMod;
  const progress = Math.ceil(cost / 100 > 1 ? cost / 100 : 1);
  const progressPerDay = tinkerers * 2 + helpers + visionary;
  const days = progress / progressPerDay;

  return (
    <>
      <Typography variant="h4">Progetti</Typography>
      <Grid container>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Potenza</FormLabel>
            <RadioGroup
              aria-label="power"
              name="power-group"
              value={power}
              onChange={(e) => {
                setPower(e.target.value);
              }}
            >
              <FormControlLabel
                value="minor"
                control={<Radio />}
                label="Minore"
              />
              <FormControlLabel
                value="medium"
                control={<Radio />}
                label="Media"
              />
              <FormControlLabel
                value="major"
                control={<Radio />}
                label="Maggiore"
              />
              <FormControlLabel
                value="extreme"
                control={<Radio />}
                label="Estrema"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Area</FormLabel>
            <RadioGroup
              aria-label="area"
              name="area-group"
              value={area}
              onChange={(e) => {
                setArea(e.target.value);
              }}
            >
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="Individuale"
              />
              <FormControlLabel
                value="small"
                control={<Radio />}
                label="Piccola"
              />
              <FormControlLabel
                value="big"
                control={<Radio />}
                label="Grande"
              />
              <FormControlLabel
                value="enormous"
                control={<Radio />}
                label="Enorme"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Usi</FormLabel>
            <RadioGroup
              aria-label="uses"
              name="uses-group"
              value={uses}
              onChange={(e) => {
                setUses(e.target.value);
              }}
            >
              <FormControlLabel
                value="consumable"
                control={<Radio />}
                label="Consumabile"
              />
              <FormControlLabel
                value="permanent"
                control={<Radio />}
                label="Permanente"
              />
            </RadioGroup>
            <br />
            <FormControlLabel
              control={<Checkbox value={defect} />}
              onChange={(e) => {
                setDefect(e.target.checked);
              }}
              label="Difettoso"
            />
          </FormControl>
        </Grid>
      </Grid>
      <Divider sx={{ my: 1 }} />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <FormControl variant="standard" fullWidth>
            <TextField
              id="tinkerers"
              label="Artefici al lavoro"
              type="number"
              size="small"
              min={1}
              max={10}
              value={tinkerers}
              onChange={(e) => {
                setThinkeres(parseInt(e.target.value));
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="standard" fullWidth>
            <TextField
              id="helpers"
              label="Aiutanti"
              type="number"
              size="small"
              min={1}
              max={10}
              value={helpers}
              onChange={(e) => {
                setHelpers(parseInt(e.target.value));
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl variant="standard" fullWidth>
            <TextField
              id="visionary"
              label="Livelli in Visionario"
              type="number"
              size="small"
              min={1}
              max={10}
              value={visionary}
              onChange={(e) => {
                setVisionary(parseInt(e.target.value));
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Typography fontWeight="bold">{cost} Zenith</Typography>
          {visionary > 0 && (
            <Typography fontWeight="bold">
              {visionary * 100} Pagati da Visionario
            </Typography>
          )}
        </Grid>
        <Grid item xs={4}>
          <Typography fontWeight="bold">{progress} Progresso</Typography>
        </Grid>
        <Grid item xs={4}>
          {days < 1 && (
            <Typography fontWeight="bold">Poche ore {days}</Typography>
          )}
          {days >= 1 && (
            <Typography fontWeight="bold">
              {progressPerDay} progresso al giorno / {Math.ceil(days)} giorni
            </Typography>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default RitualsProjects;
