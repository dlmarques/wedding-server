const transporter = require("./transporter");

const router = require("express").Router();

router.post("/confirm", async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Confirmação",
    text: `
O(a) ${req.body.nome} confirmou presença no casamento! 

Informações do(a) convidado(a) principal:
- E-mail: ${req.body.email}
- Idade: ${req.body.idade}
- Dieta: ${req.body.dieta}

Número de acompanhantes: ${req.body.guests}

Detalhes dos acompanhantes:
${req.body.guestsList
  .map((guest, index) => {
    return `
${index + 1}. 
   - Nome: ${guest.nome}
   - Idade: ${guest.idade}
   - Dieta: ${guest.dieta}`;
  })
  .join("\n")}
  `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
});

module.exports = router;
