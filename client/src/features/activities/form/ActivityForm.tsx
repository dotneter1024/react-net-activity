import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import type { FormEvent } from "react";

type Props = {
  activity?: Activity;
  closeForm: () => void;
  submitForm: (activity: Activity) => void;
}
export default function ActivityForm({ activity, closeForm, submitForm }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();//阻止表单默认提交行为,会刷新页面
    // 提交表单逻辑待添加
    const formData = new FormData(event.currentTarget);
    console.log(formData.get('title'));
    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value; //key是TextField的name属性值，value是用户输入的值
    })
    if (activity) data.id = activity.id;
    submitForm(data as unknown as Activity);
  }
  return (
    <Paper sx={{ padding: 3, borderRadius: 3 }}>
      <Typography variant="h5" color="primary" gutterBottom>Create activity</Typography>
      <Box component='form' onSubmit={handleSubmit} display='flex' flexDirection='column' gap={2}>
        {/* 表单内容待添加 */}
        <TextField name='title' label='Title' defaultValue={activity?.title} />
        <TextField name='description' label='Description' multiline rows={3} defaultValue={activity?.description} />
        <TextField name='category' label='Category' defaultValue={activity?.category} />
        <TextField name='date' label='Date' type="date" defaultValue={activity?.date} />
        <TextField name='city' label='City' defaultValue={activity?.city} />
        <TextField name='venue' label='Venue' defaultValue={activity?.venue} />
        <Box display='flex' justifyContent='end' gap={3}>
          <Button variant='contained' color='inherit' onClick={closeForm}>Cancel</Button>
          <Button variant='contained' color='success' type="submit">Submit</Button>
        </Box>
      </Box>
    </Paper>
  )
}