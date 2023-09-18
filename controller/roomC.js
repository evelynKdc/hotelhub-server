const { DateTime } = require("luxon");

const Room = require("../model/Room");

const createRoom = async (req, res) => {
  const {
    name,
    address,
    capacity,
    hotel,
    categorie,
    price,
    startDay,
    endDay,
    img,
    amenities,
  } = req.body;
  const nameFormat = name.toUpperCase();

  const startDate = DateTime.fromISO(startDay);
  const endDate = DateTime.fromISO(endDay);
  const availableDates = [];
  for (let date = startDate; date <= endDate; date = date.plus({ days: 1 })) {
    availableDates.push(date.toJSDate());
  }

  const room = new Room({
    name: nameFormat,
    address,
    hotel,
    categorie,
    capacity,
    price,
    availableDates,
    img,
    amenities,
  });

  try {
    await room.save();
    res.json({
      room,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mssg: "something is wrong",
    });
  }
};

const getRooms = async (req, res) => {
  const { limit = 5, from = 0 } = req.query;
  try {
    const [rooms, total] = await Promise.all([
      Room.find({ estatus: true })
        .populate("hotel", "name")
        .populate("categorie", "name")
        .skip(Number(from))
        .limit(Number(limit)),
      Room.find({ estatus: true }).countDocuments(),
    ]);
    res.json({
      mssg: "get pagination",
      total,
      rooms,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mssg: "internal error",
    });
  }
};

const getRoomsById = async (req, res) => {
  const { id } = req.params;

  try {
    const room = await Room.findById(id)
      .populate("hotel", "name")
      .populate("categorie", "name");

    if (!room) {
      return res.status(400).json({
        status: false,
        mssg: "It not exists in database",
      });
    }

    if (!room.estatus) {
      return res.status(400).json({
        status: false,
        mssg: "It is not an active room",
      });
    }

    res.json({
      room,
    });
  } catch (error) {
    res.status(500).json({
      mssg: "something wrong in the server",
    });
  }
};

const getRoomsFilterByDateRange = async (req, res) => {
  const { startDate, endDate } = req.body;
  try {

    const availableRooms = await Room.find({
      availableDates: {
        $elemMatch: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    }).populate("hotel"); // También puedes populating la referencia al hotel si es necesario

    // Envía la lista de habitaciones disponibles como respuesta al frontend
    res.json(availableRooms);
  } catch (error) {
    // Manejar errores de la solicitud
    console.error("Error al filtrar hoteles:", error);
    res.status(500).json({ error: "Error al filtrar hoteles." });
  }
};
module.exports = {
  createRoom,
  getRooms,
  getRoomsById,
  getRoomsFilterByDateRange
};
