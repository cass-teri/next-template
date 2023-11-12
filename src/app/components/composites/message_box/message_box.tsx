import { Button } from "@/app/components/ui/button"
import {
    Dialog as DialogBase,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/app/components/ui/dialog"
import { ReactElement } from "react"

interface IDialogProps {
    on_close: () => void
    description: string | ReactElement
    title: string | ReactElement
    is_open: boolean
}

export function MessageBox(props: IDialogProps) {
    function on_open_change() {
        props.on_close()
    }

    return (
        <DialogBase open={props.is_open} onOpenChange={on_open_change}>
            <DialogContent className="sm:max-w-1/3">
                <DialogHeader>
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogDescription>{props.description}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="button" className="text-gray-800 font-bold" onClick={() => props.on_close()}>
                        Ok
                    </Button>
                </DialogFooter>
            </DialogContent>
        </DialogBase>
    )
}
