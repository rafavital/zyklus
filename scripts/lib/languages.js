'use sctrict'
const languages = {
	ENGLISH : {
		"dates-header" : "No Dates Added",
		"dates-add-button" : "Add Date",
		"home-header" : "Current Cycle",
		"home-start" : "Start",
		"home-phase" : "Phase",
		"home-fertile" : "Fertile",
		"yes" : "Yes",
		"no" : "No",
		"delete" : "Delete",
		"progonosis-header" : "Next Cycle",
		"phase-menstruation" : "Menstruation",
		"phase-folicular" : "Folicular",
		"phase-ovulation" : "Ovulation",
		"phase-luteal" : "Luteal",
		"entries-header" : "Entry",
		"entries-menstruation-duration" : "Menstruation Duration",
		"entries-cycle-duration" : "Cycle Duration",
		"entries-start" : "Start",
		"entries-end" : "End",
		"entries-end-button" : "Set End Date",
		"entries-delete" : "Delete Entry",
		"entries-delete-confirmation" : "Are you sure you want to delete this entry?",
		"date-today" : "Today",
		"date-day" : "Day",
		"date-days" : "Days",
		"date-month" : "Month",
		"date-year" : "Year",
		"date-select-button" : "Select Date",
		"date-select-header" : "Select Date",
		"date-select-error" : "Please pick a date",
		"date-select-error-before" : "before",
		"date-select-error-after" : "after",
		"day-monday" : "Monday",
		"day-tuesday" : "Tuesday",
		"day-wednesday" : "Wednesday",
		"day-thursday" : "Thursday",
		"day-friday" : "Friday",
		"day-saturday" : "Saturday",
		"day-sunday" : "Sunday",
		"month-january" : "January",
		"month-february" : "February",
		"month-march" : "March",
		"month-april" : "April",
		"month-may" : "May",
		"month-june" : "June",
		"month-july" : "July",
		"month-august" : "August",
		"month-september" : "September",
		"month-october" : "October",
		"month-november" : "November",
		"month-december" : "December",
		"stats-header" : "Stats",
		"stats-estimations" : "Estimations",
		"stats-avrg-cycle-duration" : "Average Cycle Duration",
		"stats-avrg-menstruation-duration" : "Average Menstruation Duration",
		"stats-cycles-since-last-entry" : "Estimated Cycles since last entry",
		"stats-cycles-since-first-entry" : "Estimated Cycles since first entry",
		"stats-last-estimated-cycle" : "Last estimated cycle start",
		"stats-last-cycle" : "Last Cycle Start",
		"stats-number-of-entries" : "Number of entries",
		"settings-header" : "Settings",
		"settings-language-label" : "Language",
		"settings-language-ENGLISH" : "ENGLISH",
		"settings-language-GERMAN" : "DEUTSCH",
		"settings-language-PORTUGUESE" : "PORTUGUESE",
		"settings-theme-label" : "Theme",
		"settings-import-data" : "Import Data",
		"settings-export-data" : "Export Data",
		"settings-delete-data" : "Delete Data",
		"settings-delete-data-confirmation" : "Do you really want to delete all entries?"	
	},
	GERMAN : {
		"dates-header" : "Keine Daten hinzugefügt",
		"dates-add-button" : "Datum hinzufügen",
		"home-header" : "Aktueller Zyklus",
		"home-start" : "Anfang",
		"home-phase" : "Phase",
		"home-fertile" : "Fruchtbar",
		"yes" : "Ja",
		"no" : "Nein",
		"delete" : "Löschen",
		"progonosis-header" : "Nächster Zyklus",
		"phase-menstruation" : "Menstruation",
		"phase-folicular" : "Follikel",
		"phase-ovulation" : "Eisprung",
		"phase-luteal" : "Luteal",
		"entries-header" : "Eintrag",
		"entries-menstruation-duration" : "Menstruations Dauer",
		"entries-cycle-duration" : "Zyklus Länge",
		"entries-start" : "Anfang",
		"entries-end" : "Ende",
		"entries-end-button" : "Enddatum",
		"entries-delete" : "Eintrag löschen",
		"entries-delete-confirmation" : "Soll der Eintrag wirklich gelöscht werden?",
		"date-today" : "Heute",
		"date-day" : "Tag",
		"date-days" : "Tage",
		"date-month" : "Monat",
		"date-year" : "Jahr",
		"date-select-button" : "Datum wählen",
		"date-select-header" : "Datum wählen",
		"date-select-error" : "Bitte wähle ein Datum",
		"date-select-error-before" : "vor dem",
		"date-select-error-after" : "nach dem",
		"day-monday" : "Montag",
		"day-tuesday" : "Dienstag",
		"day-wednesday" : "Mittwoch",
		"day-thursday" : "Donnerstag",
		"day-friday" : "Freitag",
		"day-saturday" : "Samstag",
		"day-sunday" : "Sonntag",
		"month-january" : "Jänner",
		"month-february" : "Februar",
		"month-march" : "März",
		"month-april" : "April",
		"month-may" : "Mai",
		"month-june" : "Juni",
		"month-july" : "Juli",
		"month-august" : "August",
		"month-september" : "September",
		"month-october" : "Oktober",
		"month-november" : "November",
		"month-december" : "Dezember",
		"stats-header" : "Statistik",
		"stats-estimations" : "Schätzungen",
		"stats-avrg-cycle-duration" : "Durchschnittliche Zyklus Dauer",
		"stats-avrg-menstruation-duration" : "Durchschnittliche Menstruations Dauer",
		"stats-cycles-since-last-entry" : "Geschätzte Zyklen seit dem letzten Eintrag",
		"stats-cycles-since-first-entry" : "Geschätzte Zyklen seit dem ersten Eintrag",
		"stats-last-estimated-cycle" : "Letzter geschätzter Zyklus Anfang",
		"stats-last-cycle" : "Letzter eingetragener Zyklus Anfang",
		"stats-number-of-entries" : "Anzahl an Einträgen",
		"settings-header" : "Einstellungen",
		"settings-language-label" : "Sprache",
		"settings-language-ENGLISH" : "ENGLISH",
		"settings-language-GERMAN" : "DEUTSCH",
		"settings-language-PORTUGUESE" : "PORTUGUESE",
		"settings-theme-label" : "Farbschema",
		"settings-import-data" : "Daten Importieren",
		"settings-export-data" : "Daten exportieren",
		"settings-delete-data" : "Daten löschen",	
		"settings-delete-data-confirmation" : "Sollen wirklich alle Einträge gelöscht werden?"	
	},
	PORTUGUESE : {
		"dates-header" : "Nenhuma Data Adicionada",
		"dates-add-button" : "Adicionar Data",
		"home-header" : "Ciclo Atual",
		"home-start" : "Começo",
		"home-phase" : "Fase",
		"home-fertile" : "Fértil",
		"yes" : "Sim",
		"no" : "Não",
		"delete" : "Deletar",
		"progonosis-header" : "Próximo Ciclo",
		"phase-menstruation" : "Menstruação",
		"phase-folicular" : "Folicular",
		"phase-ovulation" : "Ovulação",
		"phase-luteal" : "Lútea",
		"entries-header" : "Registro",
		"entries-menstruation-duration" : "Duração da Menstruação",
		"entries-cycle-duration" : "Duração do Ciclo",
		"entries-start" : "Começo",
		"entries-end" : "Fim",
		"entries-end-button" : "Definir Data de Fim",
		"entries-delete" : "Deletar Registro",
		"entries-delete-confirmation" : "Tem certeza que quer deletar esse registro?",
		"date-today" : "Hoje",
		"date-day" : "Dia",
		"date-days" : "Dias",
		"date-month" : "Mês",
		"date-year" : "Ano",
		"date-select-button" : "Selecionar Data",
		"date-select-header" : "Selecionar Data",
		"date-select-error" : "Por favor selecione uma data",
		"date-select-error-before" : "antes",
		"date-select-error-after" : "depois",
		"day-monday" : "Segunda",
		"day-tuesday" : "Terça",
		"day-wednesday" : "Quarta",
		"day-thursday" : "Quinta",
		"day-friday" : "Sexta",
		"day-saturday" : "Sábado",
		"day-sunday" : "Domingo",
		"month-january" : "Janeiro",
		"month-february" : "Fevereiro",
		"month-march" : "Março",
		"month-april" : "Abril",
		"month-may" : "Maio",
		"month-june" : "Junho",
		"month-july" : "Julho",
		"month-august" : "Agosto",
		"month-september" : "Setembro",
		"month-october" : "Outubro",
		"month-november" : "Novembro",
		"month-december" : "Dezembro",
		"stats-header" : "Estatísticas",
		"stats-estimations" : "Estimativas",
		"stats-avrg-cycle-duration" : "Duração Média do Ciclo",
		"stats-avrg-menstruation-duration" : "Duração Média da Menstruação",
		"stats-cycles-since-last-entry" : "Estimativa de Ciclos desde o último registro",
		"stats-cycles-since-first-entry" : "Estimativa de Ciclos desde o primeiro registro",
		"stats-last-estimated-cycle" : "Estimativa do último início de ciclo",
		"stats-last-cycle" : "Último Início de Ciclo",
		"stats-number-of-entries" : "Número de registros",
		"settings-header" : "Configurações",
		"settings-language-label" : "Idioma",
		"settings-language-ENGLISH" : "ENGLISH",
		"settings-language-GERMAN" : "DEUTSCH",
		"settings-language-PORTUGUESE" : "PORTUGUESE",
		"settings-theme-label" : "Tema",
		"settings-import-data" : "Importar Dados",
		"settings-export-data" : "Exportar Dados",
		"settings-delete-data" : "Deletar Dados",
		"settings-delete-data-confirmation" : "Tem certeza que quer apagar todos os registros?"	
	}
}
