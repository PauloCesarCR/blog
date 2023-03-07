import { format,parseISO } from "date-fns";

export default function formatDate(date, dateFormat){

    return format(parseISO(date), dateFormat);

}
