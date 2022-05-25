import React from 'react'
import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg">
      <Header category="App"  title="Calendar" />
      <ScheduleComponent className="dark:bg-black-dark-bg dark:text-white" height="650px" eventSettings={{ dataSource: scheduleData }}>
        <Inject services={[ Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop ]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar