import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const RecomendacionesAcordion = (arrRecomendaciones) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{arrRecomendaciones[0].Titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{arrRecomendaciones[0].Recomendacion}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{arrRecomendaciones[1].Titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{arrRecomendaciones[1].Recomendacion}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{arrRecomendaciones[2].Titulo}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{arrRecomendaciones[2].Recomendacion}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RecomendacionesAcordion;
