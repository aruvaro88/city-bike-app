import dayjs from "dayjs"
import "dayjs/locale/en"
import "dayjs/locale/es"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)
dayjs.locale("es")

export default dayjs
