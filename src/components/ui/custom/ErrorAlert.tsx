import {AlertCircleIcon} from "lucide-react";
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert.tsx";

const ErrorAlert = () => {
    return (
        <Alert variant="destructive" className="max-w-md">
            <AlertCircleIcon />
            <AlertTitle>Oops! Something went wrong</AlertTitle>
            <AlertDescription>
                We ran into an issue while fetching data.
                Please check your internet connection or try again in a moment.
            </AlertDescription>
        </Alert>
    )
}

export default ErrorAlert