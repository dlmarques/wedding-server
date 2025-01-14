const transporter = require("./transporter");

const router = require("express").Router();

router.post("/confirm", async (req, res) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Confirmação",
    text: `O ${req.body.nome} confirmou presença no casamento! E-mail: ${
      req.body.email
    }, Idade ${req.body.idade}, Dieta ${req.body.dieta}. Com ${
      req.body.guests.length
    } convidado(s), ${req.body.guests.map((guest) => {
      return `Nome: ${guest.nome}, Idade: ${guest.idade}, Dieta: ${guest.dieta}`;
    })}`,
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
