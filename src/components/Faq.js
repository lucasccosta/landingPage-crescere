import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./Faq.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "672px",
  },
  expansion: {
    height: "52px",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#E01F27",
    borderRadius: 5,
  },
  expansionWithoutBorder: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "#E01F27",
    borderBottom: 0,
    borderRadius: "5px 5px 0px 0px",
  },
  heading: {
    fontFamily: "Rubik, sans-serif",
    fontSize: theme.typography.pxToRem(20),
    flexBasis: "100%",
    flexShrink: 0,
    fontWeight: 500,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(150),
    color: theme.palette.text.secondary,
  },
  expansionDetailsText: {
    color: "#2E2B2B",
    fontSize: 16,
    fontFamily: "Rubik, sans-serif",
  },
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          className={
            expanded === "panel3"
              ? classes.expansionWithoutBorder
              : classes.expansion
          }
          expandIcon={
            <ExpandMoreIcon style={{ color: "#2E2B2B", fontSize: 48 }} />
          }
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>
            1. Em quanto tempo meu site ficará pronto?{" "}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansion__details">
          <Typography className={classes.expansionDetailsText}>
            O tempo poderá variar a depender das funcionalidades escolhidas.
            Após escolher, você terá uma ideia de prazo para os planos Express e
            Incrível.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <ExpansionPanelSummary
          className={
            expanded === "panel5"
              ? classes.expansionWithoutBorder
              : classes.expansion
          }
          expandIcon={
            <ExpandMoreIcon style={{ color: "#2E2B2B", fontSize: 48 }} />
          }
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>
            2. Como marco minha reunião para explicar o meu site?{" "}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansion__details">
          <Typography className={classes.expansionDetailsText}>
            Para os planos Express e Incrível, após a confirmação do pagamento
            você receberá um e-mail com um formulário de informações do seu
            negócio e a opção de marcar uma data no calendário. Para o Plano
            Wow! ao solicitar o orçamento no nosso site, você receberá o contato
            da equipe your/dev para entender seu negócio e informar o valor.
            Toda a interação da equipe your/dev com vocês será de forma digital,
            não será necessária nenhuma reunião presencial.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <ExpansionPanelSummary
          className={
            expanded === "panel7"
              ? classes.expansionWithoutBorder
              : classes.expansion
          }
          expandIcon={
            <ExpandMoreIcon style={{ color: "#2E2B2B", fontSize: 48 }} />
          }
          aria-controls="panel7bh-content"
          id="panel7bh-header"
        >
          <Typography className={classes.heading}>
            3. Quais são as formas de pagamento?{" "}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansion__details">
          <Typography className={classes.expansionDetailsText}>
            Cartão de crédito ou boleto bancário (o pagamento é realizado
            através do nosso parceiro pagar.me).
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <ExpansionPanelSummary
          className={
            expanded === "panel8"
              ? classes.expansionWithoutBorder
              : classes.expansion
          }
          expandIcon={
            <ExpandMoreIcon style={{ color: "#2E2B2B", fontSize: 48 }} />
          }
          aria-controls="panel8bh-content"
          id="panel8bh-header"
        >
          <Typography className={classes.heading}>
            4. Posso cancelar meu plano a qualquer momento?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="expansion__details">
          <Typography className={classes.expansionDetailsText}>
            Após a primeira entrega não será possível cancelar. Mas você pode
            ficar com um crédito e finalizar seu projeto em outro momento (esse
            crédito ficara válido por até um ano após a contratação).
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
