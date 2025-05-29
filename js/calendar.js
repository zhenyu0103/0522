document.addEventListener('DOMContentLoaded', function() {
    // 初始化 AOS
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // 模擬的活動數據（實際應該從後端 API 獲取）
    const events = [
        {
            title: '期中考試',
            start: '2025-05-20',
            end: '2025-05-22',
            category: 'exam',
            department: 'academic-affairs',
            location: '各班教室',
            description: '111學年度第二學期期中考試'
        },
        {
            title: '校慶運動會',
            start: '2025-06-01',
            category: 'special',
            department: 'student-affairs',
            location: '操場',
            description: '年度校慶暨運動會'
        },
        {
            title: '教師研習',
            start: '2025-06-15',
            category: 'academic',
            department: 'academic-affairs',
            location: '視聽教室',
            description: '教師專業成長研習'
        },
        {
            title: '畢業典禮',
            start: '2025-06-20',
            category: 'special',
            department: 'student-affairs',
            location: '大禮堂',
            description: '111學年度畢業典禮'
        }
    ];

    // 初始化行事曆
    const calendarEl = document.getElementById('calendar');
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        locale: 'zh-tw',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,listMonth'
        },
        events: events,
        eventClick: function(info) {
            showEventDetails(info.event);
        },
        eventClassNames: function(arg) {
            return [`event-${arg.event.extendedProps.category}`, `dept-${arg.event.extendedProps.department}`];
        }
    });

    calendar.render();

    // 顯示活動詳情
    function showEventDetails(event) {
        document.getElementById('eventTitle').textContent = event.title;
        document.getElementById('eventTime').textContent = `時間：${event.startStr}${event.endStr ? ' ~ ' + event.endStr : ''}`;
        document.getElementById('eventLocation').textContent = `地點：${event.extendedProps.location}`;
        document.getElementById('eventDescription').textContent = event.extendedProps.description;
        document.getElementById('eventDepartment').textContent = getCategoryName(event.extendedProps.department);
        document.getElementById('eventCategory').textContent = getCategoryName(event.extendedProps.category);

        const modal = new bootstrap.Modal(document.getElementById('eventModal'));
        modal.show();
    }

    // 類別名稱轉換
    function getCategoryName(category) {
        const categories = {
            'academic': '教務活動',
            'student': '學務活動',
            'exam': '考試活動',
            'special': '特殊活動',
            'academic-affairs': '教務處',
            'student-affairs': '學務處',
            'counseling': '輔導處',
            'general-affairs': '總務處'
        };
        return categories[category] || category;
    }

    // 活動過濾功能
    const filterCheckboxes = document.querySelectorAll('.calendar-filter input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const activeCategories = Array.from(filterCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.value);

            calendar.getEvents().forEach(event => {
                const eventElement = calendar.getEventById(event.id);
                if (eventElement) {
                    const shouldShow = activeCategories.includes(event.extendedProps.category) ||
                                    activeCategories.includes(event.extendedProps.department);
                    eventElement.setProp('display', shouldShow ? 'auto' : 'none');
                }
            });
        });
    });
});
