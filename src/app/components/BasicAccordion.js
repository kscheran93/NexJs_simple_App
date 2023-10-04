import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Burp_Suite_lab_projects</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           The class-leading vulnerability scanning, penetration testing, and web app security platform. Learn Practical
          </Typography>
          <Link href="https://github.com/kscheran93/Burp_Suite_lab_projects">Project Github Source code</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Nmap Scan project with python coding</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is basic project with Nmap Scan with the given IP address.
          </Typography>
           <Link href="https://github.com/kscheran93/Nmap_Scan_Project_with_python">Project Github Source code</Link>
        </AccordionDetails>
      </Accordion>
       <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Phishing Attack investigation lab project</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are going to investigate the Phishing email and carry out of the following steps:Check whether URL in the email is malicious Check whether the file attachment in the email is malicious Check reputation of the sender domain
          </Typography>
          <Link href="https://github.com/kscheran93/Phishing-Attack-Investigation-Project">Project Github Source code</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Port Scanner with Python</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is simple port Scanner with python programming
          </Typography>
          <Link href="https://github.com/kscheran93/port_Scanner_with_Python">Project Github Source code</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cryptography RSA Encryption Decryption</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is a Cryptography Practise Activity to generate the popular asymmetric (public key) cryptography algorithms.
          </Typography>
          <Link href="https://github.com/kscheran93/Cryptography_RSA_Encryption-Decryption">Project Github Source code</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Capstone Project - Cyphers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            User provided messages are encoded using Cypher method, I have created to write up secret messages. This is type of caesar cypher, For example if we used the numerical equivalent of each letter instead of the letter itself.
          </Typography>
          <Link href="https://github.com/kscheran93/finalCapstone">Project Github Source code</Link>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}