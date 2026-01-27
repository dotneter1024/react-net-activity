import { Grid2 } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDtail from "../detail/ActivityDtail";
import ActivityForm from "../form/ActivityForm";
// 定义要接收的属性的类型
type Props = {
    activities: Activity[];
    cancelSelectActivity: () => void;
    selectActivity: (id: string) => void;
    selectedActivity?: Activity;
    openForm: (id: string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}
export default function ActivityDashboard({ activities, cancelSelectActivity, selectActivity
    , selectedActivity, openForm, closeForm, editMode, submitForm, deleteActivity }: Props) {
    return (
        <Grid2 container spacing={3}>
            <Grid2 size={7}>
                <ActivityList activities={activities} selectActivity={selectActivity}
                    deleteActivity={deleteActivity} />
            </Grid2>
            <Grid2 size={5}>
                {selectedActivity && !editMode &&
                    <ActivityDtail
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}

                    />
                }
                {editMode &&
                    <ActivityForm
                        activity={selectedActivity} closeForm={closeForm} submitForm={submitForm} />}
            </Grid2>
        </Grid2>
    )
}