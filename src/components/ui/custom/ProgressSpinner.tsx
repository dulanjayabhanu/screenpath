import {Button} from "@/components/ui/button.tsx";
import {Spinner} from "@/components/ui/spinner.tsx";

const ProgressSpinner = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <Button variant="secondary" disabled size="sm">
                <Spinner data-icon="inline-start" />
                Processing
            </Button>
        </div>
    )
}

export default ProgressSpinner