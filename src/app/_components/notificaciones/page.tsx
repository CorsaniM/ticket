import NotificacionGenerica from "./new-not";

export default function Notificaciones() {

    return(
        <div className="px-10 py-4">
            <NotificacionGenerica id={5}/>
            <NotificacionGenerica id={6}/>
            <NotificacionGenerica id={7}/>
        </div>
    )
}