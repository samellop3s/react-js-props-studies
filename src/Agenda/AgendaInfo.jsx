import Agenda from './Agenda';

function AgendaInfo() {
    return (
        <Agenda 
            title="Agenda"
            description="Stay organized and keep track of your tasks with our comprehensive agenda feature. Manage your daily, weekly, and monthly schedules all in one place." 
            data={["21-11-2025"]}
            paragrafo={["Fazer compras", "Reunião com equipe", "Consulta médica"]}
        />
    );
}

export default AgendaInfo;