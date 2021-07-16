# 在线记账系统



项目地址：https://lite-ledger.web.cloudendpoint.cn/

项目结构:

```text
├─components
│  ├─icon
│  │      Icon.css
│  │      Icon.tsx
│  │      
│  ├─localDatePicker
│  │      LoaclDatePicker.css
│  │      LocalDatePicker.tsx
│  │      
│  ├─logo
│  │      Logo.css
│  │      Logo.tsx
│  │      
│  ├─mainLayout
│  │      MainLayout.css
│  │      MainLayout.tsx
│  │      
│  └─provider
│      │  Provider.tsx
│      │  
│      └─reducer
│              action.ts
│              asyncActions.ts
│              reducer.ts
│              useCustomizedReducer.ts
│              
├─pages
│  ├─chart
│  │  │  ChartPage.css
│  │  │  ChartPage.tsx
│  │  │  
│  │  └─components
│  │      ├─linechart
│  │      │      lineChartInMonth.tsx
│  │      │      
│  │      └─piechart
│  │              pieChartInMonth.tsx
│  │              
│  └─detail
│      │  DetailPage.css
│      │  DetailPage.tsx
│      │  
│      └─components
│          ├─dailyRecord
│          │      DailyRecords.css
│          │      DailyRecords.tsx
│          │      
│          ├─record
│          │      Record.css
│          │      Record.tsx
│          │      
│          └─recordModal
│                  RecordModal.css
│                  RecordModal.tsx
│                  
└─services
    │  client.ts
    │  dateHelper.ts
    │  recordHelpler.ts
    │  router.tsx
    │  
    └─iconSelector
            iconSelector.ts
```



