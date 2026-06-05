import { getReservations, createReservation } from "@services/reservation.service";
import ReservationCard from "@components/ReservationCard";
import { getSession } from "@/utils";

export const homeController = async () => {

    document.querySelector("#btnReservation")?.addEventListener("click", () => {

    const formContainer = document.querySelector("#formContainer");

      formContainer.innerHTML = `
        <form
          id="reservationForm"
          style="
            background:white;
            padding:20px;
            margin-top:15px;
            border-radius:10px;
            box-shadow:0 2px 8px rgba(0,0,0,0.1);
            display:flex;
            flex-direction:column;
            gap:10px;
            max-width:500px;
          "
        >

          <h2>Nueva Reserva</h2>

          <input
            type="text"
            id="room"
            placeholder="Sala"
            required
            style="padding:10px;"
          >

          <input
            type="date"
            id="date"
            required
            style="padding:10px;"
          >

          <input
            type="time"
            id="startTime"
            required
            style="padding:10px;"
          >

          <input
            type="time"
            id="endTime"
            required
            style="padding:10px;"
          >

          <input
            type="text"
            id="reason"
            placeholder="Motivo"
            required
            style="padding:10px;"
          >

          <select
            id="status"
            style="padding:10px;"
          >
            <option value="pending">Pendiente</option>
            <option value="approved">Aprobada</option>
            <option value="rejected">Rechazada</option>
          </select>

          <button
            type="submit"
            style="
              background:#2563eb;
              color:white;
              border:none;
              padding:10px;
              border-radius:5px;
              cursor:pointer;
            "
          >
            Guardar Reserva
          </button>

        </form>
      `;

    document.querySelector("#reservationForm").addEventListener("submit", async (e) => {

      e.preventDefault();

    const reservation = {
      workspace: document.querySelector("#room").value,
      date: document.querySelector("#date").value,
      startHour: document.querySelector("#startTime").value,
      endHour: document.querySelector("#endTime").value,
      reason: document.querySelector("#reason").value,
      status: document.querySelector("#status").value,
      userId: user.id
    };

      await createReservation(reservation);

      location.reload();

    });

  });

  const container = document.querySelector("#reservationsContainer");

  const user = getSession();

  const reservations = await getReservations();

  console.log(reservations);

  const filteredReservations =
    user.role === "admin"
      ? reservations
      : reservations.filter((reservation) => reservation.userId === user.id);

  container.innerHTML = filteredReservations?.length
    ? filteredReservations
        .map((reservation) => ReservationCard(reservation))
        .join("")
    : `
      <div class="w-full text-center py-8 col-span-2">
        <p class="text-slate-500">
          No hay reservas disponibles
        </p>
      </div>
    `;

};
 