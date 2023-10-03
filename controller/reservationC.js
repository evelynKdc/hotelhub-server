const Reservation = require("../model/Reservation");

const createReaservation = async (req, res) => {
  const { id } = req.params;
  const { room, roomType, checkIn, checkOut, guest, additions } = req.body;

  const reservation = new Reservation({
    user: id,
    room,
    roomType,
    checkIn,
    checkOut,
    guest,
    additions,
  });
  try {
    await reservation.save();
    res.json({ reservation });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

const getReservation = async(req, res) => {
  const { id } = req.params;

  try {
    const reservations =  await Reservation.find({ user: id }).populate("room").populate("roomType");
    res.json({ reservations });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  createReaservation,
  getReservation,
};
