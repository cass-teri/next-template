import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"
import { FaBomb, FaCircleInfo } from "react-icons/fa6"

interface INotificationProps {
    variant: "default" | "destructive"
    title: string
    description: string
}

export function Notification(props: INotificationProps) {
    const icon = props.variant === "default" ? <FaCircleInfo className="h-5 w-5" /> : <FaBomb className="h-5 w-5" />

    return (
        <Alert variant={props.variant}>
            {icon}
            <AlertTitle>{props.title}</AlertTitle>
            <AlertDescription>{props.description}</AlertDescription>
        </Alert>
    )
}
