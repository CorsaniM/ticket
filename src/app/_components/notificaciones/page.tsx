import NotificacionGenerica from "./new-not";

export default function Notificaciones() {

    return(
        <div className="w-7/8 p-20">
            <NotificacionGenerica id={5}/>
            <NotificacionGenerica id={6}/>
            <NotificacionGenerica id={7}/>
        </div>
    )
}