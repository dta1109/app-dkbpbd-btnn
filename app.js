const modules = [
  {
    id: "overview",
    code: "I",
    name: "Tổng quan",
    tabs: ["Bảng điều khiển", "Kiến trúc", "Nhu cầu"],
    workflow: ["Tiếp nhận yêu cầu", "Phân loại nghiệp vụ", "Xử lý theo quy trình", "Ký số và trả kết quả", "Đồng bộ, báo cáo, lưu trữ"],
    features: [
      ["Kênh tương tác", "Ứng dụng web/mobile cho người dân, doanh nghiệp, cán bộ, quản trị hệ thống."],
      ["Dữ liệu dùng chung", "CSDL đăng ký BPBĐ, CSDL BTNN, lưu trữ hồ sơ phi cấu trúc, danh mục và nhật ký."],
      ["Tích hợp", "LGSP, Cổng DVC quốc gia, EMC, ký số, email/SMS, hệ thống PTGT, đất đai và dữ liệu quốc gia."]
    ]
  },
  {
    id: "users",
    code: "I.1.1",
    name: "Quản lý người sử dụng",
    tabs: ["Tài khoản", "Nhóm quyền", "Bảo mật"],
    workflow: ["Đăng ký tài khoản", "Xác thực thông tin", "Gán nhóm chức năng", "Theo dõi đăng nhập", "Khóa hoặc khôi phục tài khoản"],
    types: ["Đăng ký tài khoản", "Cập nhật tài khoản", "Phân quyền nhóm", "Yêu cầu đổi mật khẩu"],
    features: [
      ["Đăng nhập", "Màn hình đăng nhập, xác thực, đổi mật khẩu lần đầu, giới hạn đăng nhập sai."],
      ["Tài khoản phụ thuộc", "Tạo tài khoản phụ thuộc tổ chức/cá nhân và quản lý trạng thái hoạt động."],
      ["Vai trò và quyền", "Gán chức năng theo nhóm người dùng, vai trò, đơn vị và phạm vi dữ liệu."]
    ]
  },
  {
    id: "bpbd",
    code: "I.1.2",
    name: "Đăng ký, cung cấp thông tin BPBĐ",
    tabs: ["Hồ sơ đăng ký", "Cung cấp thông tin", "Ký trả kết quả"],
    workflow: ["Lập hồ sơ trực tuyến hoặc bản giấy", "Kiểm tra hồ sơ và nghĩa vụ tài chính", "Trình ký duyệt", "Ký số văn bản chứng nhận", "Trả kết quả và gửi thông báo"],
    types: ["Thế chấp động sản", "Cầm cố động sản", "Đặt cọc", "Ký cược", "Ký quỹ", "Cho thuê tài chính", "Bảo lưu quyền sở hữu", "Hợp đồng ký gửi", "Đăng ký tập trung", "Cung cấp bản sao", "Tra cứu thông tin BPBĐ"],
    features: [
      ["Hồ sơ đăng ký", "Lập mới, thay đổi, hủy, khôi phục, chỉnh lý thông tin đăng ký biện pháp bảo đảm."],
      ["Cung cấp thông tin", "Yêu cầu bản sao văn bản chứng nhận, thông báo thế chấp, tra cứu theo tham số."],
      ["Ký số", "Ký duyệt hồ sơ, phát hành văn bản chứng nhận, trả kết quả qua tài khoản hoặc văn thư."]
    ]
  },
  {
    id: "inspection",
    code: "I.1.3",
    name: "Kiểm tra, tập huấn, hướng dẫn ĐK BPBĐ",
    tabs: ["Kế hoạch", "Tập huấn", "Hướng dẫn"],
    workflow: ["Lập kế hoạch kiểm tra", "Phân công đơn vị", "Ghi nhận kết quả", "Ban hành hướng dẫn", "Theo dõi khắc phục"],
    types: ["Kế hoạch kiểm tra", "Biên bản kiểm tra", "Lớp tập huấn", "Văn bản hướng dẫn"],
    features: [
      ["Kiểm tra nghiệp vụ", "Quản lý kế hoạch, đoàn kiểm tra, kết luận và kiến nghị xử lý."],
      ["Tập huấn", "Lịch tập huấn, danh sách học viên, tài liệu, điểm danh và đánh giá."],
      ["Hướng dẫn", "Tiếp nhận vướng mắc, phân loại câu hỏi, ban hành trả lời nghiệp vụ."]
    ]
  },
  {
    id: "finance",
    code: "I.1.4",
    name: "Quản lý tài chính",
    tabs: ["Phí", "Hoàn trả", "Đối soát"],
    workflow: ["Ghi nhận khoản thu", "Đối soát thanh toán", "Xử lý miễn giảm/hoàn trả", "Hạch toán", "Kết xuất báo cáo"],
    types: ["Thu phí đăng ký", "Thu phí cung cấp thông tin", "Hoàn trả phí", "Đối soát thanh toán"],
    features: [
      ["Thanh toán", "Quản lý phí đăng ký, phí cung cấp thông tin, biên lai và trạng thái thanh toán."],
      ["Hoàn trả", "Tạo yêu cầu hoàn trả, phê duyệt kế toán, ghi nhận lý do và chứng từ."],
      ["Báo cáo tài chính", "Tổng hợp doanh thu, miễn giảm, hoàn trả theo thời gian, đơn vị, dịch vụ."]
    ]
  },
  {
    id: "btnn",
    code: "II",
    name: "Quản lý công tác bồi thường nhà nước",
    tabs: ["Yêu cầu bồi thường", "Kinh phí", "Hoàn trả"],
    workflow: ["Tiếp nhận hồ sơ YCBT", "Xác định cơ quan giải quyết", "Thụ lý hoặc yêu cầu bổ sung", "Lập phương án bồi thường", "Theo dõi chi trả, phục hồi danh dự, hoàn trả"],
    types: ["Xác định cơ quan GQBT", "Phục hồi danh dự", "Giải quyết yêu cầu bồi thường", "Tạm ứng kinh phí", "Chi trả bồi thường", "Xem xét trách nhiệm hoàn trả"],
    features: [
      ["Hồ sơ YCBT", "Tiếp nhận, bổ sung, thụ lý, tạm đình chỉ, đình chỉ và kết thúc giải quyết yêu cầu bồi thường."],
      ["Kinh phí", "Quản lý tạm ứng, cấp phát, chi trả, quyết toán kinh phí bồi thường."],
      ["Hoàn trả", "Theo dõi trách nhiệm hoàn trả của người thi hành công vụ gây thiệt hại."]
    ]
  },
  {
    id: "support",
    code: "II.5",
    name: "Hỗ trợ người sử dụng",
    tabs: ["Tư liệu", "FAQ", "Yêu cầu hỗ trợ"],
    workflow: ["Tiếp nhận câu hỏi", "Phân loại lĩnh vực", "Biên tập câu trả lời", "Công bố", "Đánh giá mức độ hài lòng"],
    types: ["Tư liệu VBQPPL", "Câu hỏi thường gặp BPBĐ", "Câu hỏi thường gặp BTNN", "Phiếu hỗ trợ người dùng"],
    features: [
      ["Tư liệu pháp luật", "Quản lý văn bản quy phạm pháp luật, hướng dẫn và tài liệu nghiệp vụ."],
      ["FAQ", "Câu hỏi thường gặp theo lĩnh vực đăng ký BPBĐ và bồi thường nhà nước."],
      ["Hỗ trợ", "Tiếp nhận, xử lý, phân công và thống kê yêu cầu hỗ trợ người sử dụng."]
    ]
  },
  {
    id: "reports",
    code: "II.6 / IV",
    name: "Báo cáo, thống kê, quản lý nhà nước",
    tabs: ["Dashboard", "Báo cáo", "Giám sát"],
    workflow: ["Chọn bộ tiêu chí", "Tổng hợp dữ liệu", "Hiển thị biểu đồ", "Kết xuất Excel/PDF", "Theo dõi cảnh báo điều hành"],
    types: ["Dashboard ĐK BPBĐ", "Dashboard BTNN", "Báo cáo thống kê hồ sơ", "Thống kê kết quả YCBT", "Giám sát toàn quốc"],
    features: [
      ["Dashboard BPBĐ", "Trực quan số lượng đăng ký, thay đổi, hủy, tra cứu, quá hạn theo địa bàn."],
      ["Dashboard BTNN", "Theo dõi vụ việc bồi thường, kinh phí, trạng thái giải quyết và hoàn trả."],
      ["Kết xuất", "Xuất báo cáo theo tham số đơn, tham số kết hợp, phạm vi quản lý và thời kỳ."]
    ]
  },
  {
    id: "cms",
    code: "III.1",
    name: "Quản lý nội dung CMS",
    tabs: ["Trang tin", "Banner", "Cấu hình"],
    workflow: ["Soạn nội dung", "Biên tập", "Duyệt hiển thị", "Công bố", "Theo dõi phiên bản"],
    types: ["Tin tức", "Biểu ngữ", "Đầu trang/chân trang", "Liên kết", "Nội dung hỗ trợ", "Cấu hình API"],
    features: [
      ["Biên tập", "Quản lý nội dung trang tin, bố cục hiển thị, trạng thái công bố và lịch đăng."],
      ["Giao diện", "Banner, đầu trang, chân trang, liên kết, thông tin hỗ trợ người dùng."],
      ["Cấu hình", "Cấu hình API, tiến trình tự động, thông báo email/SMS."]
    ]
  },
  {
    id: "admin",
    code: "III.3 - III.5",
    name: "Quản trị hệ thống",
    tabs: ["Danh mục", "Nhật ký", "Sao lưu"],
    workflow: ["Cấu hình danh mục", "Thiết lập chính sách", "Giám sát nhật ký", "Sao lưu định kỳ", "Phục hồi khi có sự cố"],
    types: ["Danh mục địa danh", "Danh mục mã nước", "Tài khoản cán bộ", "Job tự động", "Nhật ký đăng nhập", "Nhật ký tài khoản", "Sao lưu dữ liệu"],
    features: [
      ["Danh mục", "Địa danh, mã nước, cơ quan, tài khoản cán bộ, đơn vị xử lý và nhóm vai trò."],
      ["Nhật ký", "Nhật ký đăng nhập, hoạt động hệ thống, quản lý tài khoản và truy cập dữ liệu."],
      ["Sao lưu", "Lập lịch sao lưu, kiểm tra bản sao, phục hồi dữ liệu và cảnh báo vận hành."]
    ]
  },
  {
    id: "integrations",
    code: "IV.5",
    name: "Tích hợp, chia sẻ dữ liệu API",
    tabs: ["Tiếp nhận", "Chia sẻ", "Giám sát API"],
    workflow: ["Đăng ký kết nối", "Cấu hình endpoint", "Đồng bộ dữ liệu", "Đối soát phản hồi", "Giám sát SLA"],
    types: ["API tiếp nhận tài khoản", "API tiếp nhận hồ sơ", "API kết quả thanh toán", "API chia sẻ kết quả", "API dữ liệu PTGT", "API dữ liệu đất đai"],
    features: [
      ["Tiếp nhận dữ liệu", "Tài khoản, hỗ trợ, hồ sơ đăng ký, kết quả thanh toán và dữ liệu liên thông."],
      ["Chia sẻ dữ liệu", "Kết quả thực hiện dịch vụ, thông tin BPBĐ, dữ liệu hồ sơ, báo cáo quản lý."],
      ["Giám sát", "Theo dõi trạng thái endpoint, thời gian phản hồi, lỗi tích hợp và lịch sử đồng bộ."]
    ]
  }
];

const state = {
  activeModule: "overview",
  activeTab: 0,
  lang: localStorage.getItem("systemLanguage") || "vi",
  query: "",
  statusFilter: "",
  logs: [
    { vi: "Hệ thống tự động sao lưu CSDL lúc 02:00.", en: "The system automatically backed up the database at 02:00." },
    { vi: "Đã đồng bộ kết quả thanh toán với cổng tích hợp.", en: "Payment results were synchronized with the integration gateway." },
    { vi: "Cán bộ nghiệp vụ ký số 3 văn bản chứng nhận.", en: "The case officer digitally signed 3 certificates." },
    { vi: "Có 2 hồ sơ YCBT cần bổ sung tài liệu.", en: "There are 2 compensation cases requiring additional documents." }
  ],
  apis: [
    { name: "Cổng DVC quốc gia", status: "healthy" },
    { name: "LGSP Bộ Tư pháp", status: "healthy" },
    { name: "Hệ thống EMC", status: "healthy" },
    { name: "PTGT Bộ Công an", status: "warning" },
    { name: "CSDL đất đai", status: "healthy" }
  ],
  cases: [
    { id: "BPBD-2026-0001", module: "bpbd", type: "Thế chấp động sản", requester: "Công ty Minh An", agency: "Trung tâm ĐK GDBĐ", dueDate: "2026-06-05", status: "Mới tiếp nhận", priority: "Bình thường", summary: "Đăng ký thế chấp phương tiện và tài sản hình thành trong tương lai." },
    { id: "BPBD-2026-0002", module: "bpbd", type: "Cung cấp bản sao", requester: "Nguyễn Văn Nam", agency: "Văn thư", dueDate: "2026-06-03", status: "Đã ký số", priority: "Bình thường", summary: "Cấp bản sao văn bản chứng nhận đăng ký biện pháp bảo đảm." },
    { id: "BTNN-2026-0001", module: "btnn", type: "Giải quyết yêu cầu bồi thường", requester: "Sở Tư pháp Hà Nội", agency: "Phòng nghiệp vụ BTNN", dueDate: "2026-06-20", status: "Đang kiểm tra", priority: "Cao", summary: "Theo dõi hồ sơ yêu cầu bồi thường và phương án chi trả." },
    { id: "FIN-2026-0001", module: "finance", type: "Hoàn trả phí", requester: "Ngân hàng ABC", agency: "Kế toán", dueDate: "2026-06-07", status: "Mới tiếp nhận", priority: "Bình thường", summary: "Hoàn trả phí do hồ sơ đăng ký bị từ chối." },
    { id: "API-2026-0001", module: "integrations", type: "API tiếp nhận hồ sơ", requester: "Cổng DVC quốc gia", agency: "Quản trị tích hợp", dueDate: "2026-06-04", status: "Đã trả kết quả", priority: "Cao", summary: "Đối soát gói dữ liệu tiếp nhận hồ sơ trực tuyến." },
    { id: "ADM-2026-0001", module: "admin", type: "Nhật ký đăng nhập", requester: "QTHT", agency: "Trung tâm vận hành", dueDate: "2026-06-02", status: "Đang kiểm tra", priority: "Cao", summary: "Rà soát cảnh báo đăng nhập sai vượt ngưỡng." }
  ]
};

const statusClass = {
  "Mới tiếp nhận": "status-new",
  "Đang kiểm tra": "status-review",
  "Đã ký số": "status-signed",
  "Đã trả kết quả": "status-returned"
};

const uiText = {
  vi: {
    brandSubtitle: "Hệ thống nghiệp vụ hợp nhất",
    ministry: "Bộ Tư pháp",
    searchLabel: "Tìm",
    searchPlaceholder: "Mã hồ sơ, người yêu cầu, nghiệp vụ...",
    openCases: "Hồ sơ đang xử lý",
    openCasesHint: "ĐK BPBĐ, YCBT và yêu cầu cung cấp thông tin",
    signedCases: "Đã ký số",
    signedCasesHint: "Văn bản chứng nhận, kết quả, thông báo",
    apiHealthy: "API liên thông",
    apiHealthyHint: "DVCQG, LGSP, EMC, PTGT, đất đai",
    alerts: "Cảnh báo vận hành",
    alertsHint: "An toàn thông tin, sao lưu, nhật ký",
    allStatuses: "Tất cả trạng thái",
    exportReport: "Kết xuất báo cáo",
    newCase: "Tạo hồ sơ/yêu cầu",
    processingList: "Danh sách xử lý",
    workflow: "Luồng xử lý",
    recentLog: "Nhật ký gần đây",
    noData: "Không có dữ liệu phù hợp với điều kiện tìm kiếm.",
    noAttachment: "Chưa có tài liệu",
    attachmentEmpty: "Chưa chọn tài liệu. Chấp nhận PDF, Word, Excel và hình ảnh.",
    attachmentLabel: "Tài liệu chứng minh",
    create: "Tạo mới",
    businessType: "Loại nghiệp vụ",
    requester: "Người yêu cầu",
    requesterPlaceholder: "Cá nhân, tổ chức hoặc cơ quan",
    agency: "Cơ quan xử lý",
    agencyPlaceholder: "Trung tâm/Cục/Sở Tư pháp",
    dueDate: "Hạn xử lý",
    summary: "Nội dung",
    summaryPlaceholder: "Tóm tắt yêu cầu, tài sản, vụ việc hoặc báo cáo",
    cancel: "Hủy",
    save: "Lưu hồ sơ",
    close: "Đóng",
    code: "Mã",
    service: "Nghiệp vụ",
    document: "Tài liệu",
    status: "Trạng thái",
    action: "Thao tác",
    nextStep: "Chuyển bước",
    reportByModule: "Thống kê hồ sơ theo phân hệ",
    integrationsWatching: "Tích hợp đang giám sát",
    healthy: "Thông suốt",
    warning: "Cần kiểm tra",
    roles: ["Quản trị hệ thống", "Cán bộ tiếp nhận", "Cán bộ nghiệp vụ", "Lãnh đạo phê duyệt", "Người dân / tổ chức"],
    statuses: ["Mới tiếp nhận", "Đang kiểm tra", "Đã ký số", "Đã trả kết quả"],
    statusMap: {
      "Mới tiếp nhận": "Mới tiếp nhận",
      "Đang kiểm tra": "Đang kiểm tra",
      "Đã ký số": "Đã ký số",
      "Đã trả kết quả": "Đã trả kết quả"
    },
    normalPriority: "Bình thường",
    highPriority: "Cao"
  },
  en: {
    brandSubtitle: "Unified business system · attachment enabled",
    ministry: "Ministry of Justice",
    searchLabel: "Search",
    searchPlaceholder: "Case ID, requester, service...",
    openCases: "Open cases",
    openCasesHint: "Secured transactions, compensation and information requests",
    signedCases: "Digitally signed",
    signedCasesHint: "Certificates, results and notices",
    apiHealthy: "Connected APIs",
    apiHealthyHint: "National portal, LGSP, EMC, vehicles, land data",
    alerts: "Operational alerts",
    alertsHint: "Security, backup and audit logs",
    allStatuses: "All statuses",
    exportReport: "Export report",
    newCase: "Create case/request",
    processingList: "Processing list",
    workflow: "Workflow",
    recentLog: "Recent activity",
    noData: "No records match the current filters.",
    noAttachment: "No attachment",
    attachmentEmpty: "No file selected. PDF, Word, Excel and image files are accepted.",
    attachmentLabel: "Supporting documents",
    create: "Create",
    businessType: "Service type",
    requester: "Requester",
    requesterPlaceholder: "Individual, organization or agency",
    agency: "Processing agency",
    agencyPlaceholder: "Center/Department/Justice agency",
    dueDate: "Due date",
    summary: "Description",
    summaryPlaceholder: "Summarize the request, asset, case or report",
    cancel: "Cancel",
    save: "Save case",
    close: "Close",
    code: "ID",
    service: "Service",
    document: "Document",
    status: "Status",
    action: "Action",
    nextStep: "Next step",
    reportByModule: "Cases by module",
    integrationsWatching: "Monitored integrations",
    healthy: "Healthy",
    warning: "Needs review",
    roles: ["System administrator", "Intake officer", "Case officer", "Approval manager", "Citizen / organization"],
    statuses: ["Newly received", "Under review", "Digitally signed", "Returned"],
    statusMap: {
      "Mới tiếp nhận": "Newly received",
      "Đang kiểm tra": "Under review",
      "Đã ký số": "Digitally signed",
      "Đã trả kết quả": "Returned"
    },
    normalPriority: "Normal",
    highPriority: "High"
  }
};

const englishModules = {
  overview: {
    name: "Overview",
    tabs: ["Dashboard", "Architecture", "Needs"],
    workflow: ["Receive request", "Classify business process", "Process by workflow", "Digitally sign and return result", "Synchronize, report and archive"],
    features: [["Interaction channels", "Web/mobile apps for citizens, businesses, officers and administrators."], ["Shared data", "Secured transaction database, state compensation database, document storage, catalogs and logs."], ["Integration", "LGSP, national public service portal, EMC, digital signature, email/SMS, vehicle, land and national data systems."]]
  },
  users: {
    name: "User management",
    tabs: ["Accounts", "Permission groups", "Security"],
    workflow: ["Register account", "Verify information", "Assign function groups", "Monitor login", "Lock or restore account"],
    types: ["Register account", "Update account", "Assign permissions", "Password change request"],
    features: [["Login", "Login, authentication, first-login password change and failed-login limits."], ["Dependent accounts", "Create dependent accounts for organizations/individuals and manage status."], ["Roles and permissions", "Assign functions by group, role, agency and data scope."]]
  },
  bpbd: {
    name: "Secured transaction registration and information",
    tabs: ["Registration cases", "Information requests", "Signing and results"],
    workflow: ["Create online or paper case", "Review documents and financial obligations", "Submit for approval", "Digitally sign certificate", "Return result and send notice"],
    types: ["Movable property mortgage", "Movable property pledge", "Deposit", "Security deposit", "Escrow", "Financial lease", "Retention of title", "Consignment contract", "Bulk registration", "Copy request", "Secured transaction lookup"],
    features: [["Registration cases", "Create, amend, cancel, restore and correct secured transaction registrations."], ["Information requests", "Request certificate copies, mortgage notices and parameter-based lookups."], ["Digital signing", "Approve cases, issue certificates and return results through account or dispatch."]]
  },
  inspection: {
    name: "Inspection, training and guidance",
    tabs: ["Plans", "Training", "Guidance"],
    workflow: ["Create inspection plan", "Assign unit", "Record results", "Issue guidance", "Track remediation"],
    types: ["Inspection plan", "Inspection minutes", "Training class", "Guidance document"],
    features: [["Business inspection", "Manage plans, teams, conclusions and recommendations."], ["Training", "Schedules, trainees, materials, attendance and evaluation."], ["Guidance", "Receive issues, classify questions and publish business guidance."]]
  },
  finance: {
    name: "Financial management",
    tabs: ["Fees", "Refunds", "Reconciliation"],
    workflow: ["Record payment", "Reconcile transaction", "Handle exemption/refund", "Post accounting entry", "Export report"],
    types: ["Registration fee", "Information request fee", "Fee refund", "Payment reconciliation"],
    features: [["Payment", "Manage registration fees, information request fees, receipts and payment status."], ["Refunds", "Create refund requests, accounting approval, reasons and evidence."], ["Financial reports", "Summarize revenue, exemptions and refunds by period, unit and service."]]
  },
  btnn: {
    name: "State compensation management",
    tabs: ["Compensation requests", "Funding", "Reimbursement"],
    workflow: ["Receive compensation file", "Identify responsible agency", "Accept or request supplements", "Prepare compensation plan", "Track payment, honor restoration and reimbursement"],
    types: ["Identify resolving agency", "Restore honor", "Resolve compensation request", "Funding advance", "Compensation payment", "Review reimbursement liability"],
    features: [["Compensation cases", "Receive, supplement, accept, suspend, terminate and close compensation requests."], ["Funding", "Manage advances, allocation, payment and settlement of compensation funds."], ["Reimbursement", "Track reimbursement liability of officials who caused damage."]]
  },
  support: {
    name: "User support",
    tabs: ["Materials", "FAQ", "Support requests"],
    workflow: ["Receive question", "Classify domain", "Draft answer", "Publish", "Measure satisfaction"],
    types: ["Legal materials", "Secured transaction FAQ", "State compensation FAQ", "User support ticket"],
    features: [["Legal materials", "Manage legal documents, guidance and business materials."], ["FAQ", "Frequently asked questions by secured transaction and state compensation domains."], ["Support", "Receive, process, assign and report user support requests."]]
  },
  reports: {
    name: "Reports, statistics and state management",
    tabs: ["Dashboard", "Reports", "Monitoring"],
    workflow: ["Select criteria", "Aggregate data", "Display charts", "Export Excel/PDF", "Monitor operating alerts"],
    types: ["Secured transaction dashboard", "State compensation dashboard", "Case statistics report", "Compensation result statistics", "Nationwide monitoring"],
    features: [["Secured transaction dashboard", "Visualize registrations, changes, cancellations, lookups and overdue cases by area."], ["Compensation dashboard", "Track compensation cases, funding, resolution status and reimbursement."], ["Exports", "Export reports by single criteria, combined criteria, management scope and period."]]
  },
  cms: {
    name: "CMS content management",
    tabs: ["Website content", "Banner", "Configuration"],
    workflow: ["Draft content", "Edit", "Approve display", "Publish", "Track versions"],
    types: ["News", "Banner", "Header/footer", "Links", "Support content", "API configuration"],
    features: [["Editing", "Manage website content, layout, publishing status and schedule."], ["Interface", "Banner, header, footer, links and user support information."], ["Configuration", "Configure APIs, automated jobs and email/SMS notifications."]]
  },
  admin: {
    name: "System administration",
    tabs: ["Catalogs", "Logs", "Backup"],
    workflow: ["Configure catalogs", "Set policies", "Monitor logs", "Schedule backups", "Restore after incident"],
    types: ["Place catalog", "Country code catalog", "Officer account", "Automated job", "Login log", "Account log", "Data backup"],
    features: [["Catalogs", "Places, country codes, agencies, officer accounts, processing units and role groups."], ["Logs", "Login, system activity, account management and data access logs."], ["Backup", "Schedule backups, verify copies, restore data and alert operations."]]
  },
  integrations: {
    name: "API integration and data sharing",
    tabs: ["Receiving", "Sharing", "API monitoring"],
    workflow: ["Register connection", "Configure endpoint", "Synchronize data", "Reconcile response", "Monitor SLA"],
    types: ["Receive account API", "Receive case API", "Payment result API", "Share result API", "Vehicle data API", "Land data API"],
    features: [["Data receiving", "Accounts, support, registration cases, payment results and integrated data."], ["Data sharing", "Service results, secured transaction information, case data and management reports."], ["Monitoring", "Track endpoint status, response time, integration errors and sync history."]]
  }
};

const englishCases = {
  "BPBD-2026-0001": {
    type: "Movable property mortgage",
    requester: "Minh An Company",
    agency: "Secured Transaction Registration Center",
    summary: "Register a mortgage over vehicles and future-formed assets."
  },
  "BPBD-2026-0002": {
    type: "Certificate copy request",
    requester: "Nguyen Van Nam",
    agency: "Dispatch office",
    summary: "Issue a copy of the secured transaction registration certificate."
  },
  "BTNN-2026-0001": {
    type: "Compensation request resolution",
    requester: "Hanoi Department of Justice",
    agency: "State Compensation Business Division",
    summary: "Track the compensation request file and payment plan."
  },
  "FIN-2026-0001": {
    type: "Fee refund",
    requester: "ABC Bank",
    agency: "Accounting",
    summary: "Refund a fee because the registration case was rejected."
  },
  "API-2026-0001": {
    type: "Case receiving API",
    requester: "National Public Service Portal",
    agency: "Integration Administration",
    summary: "Reconcile the online case receiving data package."
  },
  "ADM-2026-0001": {
    type: "Login log",
    requester: "System administrator",
    agency: "Operations Center",
    summary: "Review alerts for failed login attempts exceeding the threshold."
  }
};

const englishApiNames = [
  "National Public Service Portal",
  "Ministry of Justice LGSP",
  "EMC System",
  "Ministry of Public Security Vehicle System",
  "National Land Database"
];

function byId(id) {
  return document.getElementById(id);
}

function text(key) {
  return uiText[state.lang][key];
}

function displayModule(module) {
  return state.lang === "en" ? { ...module, ...englishModules[module.id] } : module;
}

function displayStatus(status) {
  return uiText[state.lang].statusMap[status] || status;
}

function displayPriority(priority) {
  if (priority === "Cao") return text("highPriority");
  if (priority === "Bình thường") return text("normalPriority");
  return priority;
}

function displayCase(item) {
  return state.lang === "en" && englishCases[item.id] ? { ...item, ...englishCases[item.id] } : item;
}

function displayApiName(api, index) {
  return state.lang === "en" ? (englishApiNames[index] || api.name) : api.name;
}

function displayLog(entry) {
  if (typeof entry === "string") return entry;
  return entry[state.lang] || entry.vi || "";
}

function activeModule() {
  return modules.find((item) => item.id === state.activeModule) || modules[0];
}

function renderNav() {
  const nav = byId("moduleNav");
  nav.innerHTML = modules
    .map((module) => `<button type="button" class="${module.id === state.activeModule ? "active" : ""}" data-module="${module.id}">${displayModule(module).name}</button>`)
    .join("");
}

function renderTabs(module) {
  const tabs = byId("viewTabs");
  tabs.innerHTML = module.tabs
    .map((tab, index) => `<button type="button" class="${index === state.activeTab ? "active" : ""}" data-tab="${index}">${tab}</button>`)
    .join("");
}

function filteredCases(moduleId = state.activeModule) {
  const q = state.query.trim().toLowerCase();
  return state.cases.filter((item) => {
    const visibleItem = displayCase(item);
    const sameModule = moduleId === "overview" || item.module === moduleId;
    const sameStatus = !state.statusFilter || item.status === state.statusFilter;
    const attachmentText = (item.attachments || []).map((file) => file.name).join(" ");
    const searchable = `${visibleItem.id} ${visibleItem.type} ${visibleItem.requester} ${visibleItem.agency} ${displayStatus(item.status)} ${visibleItem.summary} ${attachmentText}`.toLowerCase();
    return sameModule && sameStatus && (!q || searchable.includes(q));
  });
}

function renderStats() {
  byId("openCases").textContent = state.cases.filter((item) => item.status !== "Đã trả kết quả").length;
  byId("signedCases").textContent = state.cases.filter((item) => item.status === "Đã ký số" || item.status === "Đã trả kết quả").length;
  byId("apiHealthy").textContent = `${state.apis.filter((api) => api.status === "healthy").length}/${state.apis.length}`;
  byId("alertCount").textContent = state.cases.filter((item) => item.priority === "Cao").length + state.apis.filter((api) => api.status !== "healthy").length;
}

function renderFeatureCards(module) {
  return `<div class="cards-grid">${module.features
    .map((feature) => `<article class="feature-card"><h3>${feature[0]}</h3><p>${feature[1]}</p></article>`)
    .join("")}</div>`;
}

function renderAttachmentList(attachments = []) {
  if (!attachments.length) {
    return `<span class="attachment-list">${text("noAttachment")}</span>`;
  }

  return `<span class="attachment-list">${attachments
    .map((file) => `<span><b>${file.name}</b><br>${formatFileSize(file.size)}</span>`)
    .join("")}</span>`;
}

function renderCaseTable(rows) {
  if (!rows.length) {
    return `<p>${text("noData")}</p>`;
  }

  return `<table class="case-table">
    <thead>
      <tr>
        <th>${text("code")}</th>
        <th>${text("service")}</th>
        <th>${text("requester")}</th>
        <th>${text("agency")}</th>
        <th>${text("dueDate")}</th>
        <th>${text("document")}</th>
        <th>${text("status")}</th>
        <th>${text("action")}</th>
      </tr>
    </thead>
    <tbody>
      ${rows
        .map((item) => {
          const visibleItem = displayCase(item);
          return `<tr>
            <td><strong>${item.id}</strong><br><span class="priority-pill ${item.priority === "Cao" ? "priority-high" : "priority-normal"}">${displayPriority(item.priority)}</span></td>
            <td>${visibleItem.type}<br><small>${visibleItem.summary}</small></td>
            <td>${visibleItem.requester}</td>
            <td>${visibleItem.agency}</td>
            <td>${formatDate(item.dueDate)}</td>
            <td>${renderAttachmentList(item.attachments)}</td>
            <td><span class="status-pill ${statusClass[item.status]}">${displayStatus(item.status)}</span></td>
            <td>
              <button class="ghost-button" type="button" data-action="advance" data-case="${item.id}">${text("nextStep")}</button>
            </td>
          </tr>`;
        })
        .join("")}
    </tbody>
  </table>`;
}

function renderReports() {
  const counts = modules
    .filter((module) => module.id !== "overview")
    .map((module) => ({ id: module.id, name: displayModule(module).name, count: state.cases.filter((item) => item.module === module.id).length }))
    .filter((item) => item.count > 0);
  const max = Math.max(1, ...counts.map((item) => item.count));

  return `<div class="report-grid">
    <div class="feature-card">
      <h3>${text("reportByModule")}</h3>
      <div class="bars">
        ${counts
          .map(
            (item) => `<div class="bar-row">
              <span><b>${item.name}</b><em>${item.count}</em></span>
              <div class="bar"><i style="width:${(item.count / max) * 100}%"></i></div>
            </div>`
          )
          .join("")}
      </div>
    </div>
    <div class="feature-card">
      <h3>${text("integrationsWatching")}</h3>
      ${state.apis
        .map((api, index) => `<p><strong>${displayApiName(api, index)}</strong>: ${api.status === "healthy" ? text("healthy") : text("warning")}</p>`)
        .join("")}
    </div>
  </div>`;
}

function renderBody(module) {
  const isReport = module.id === "overview" || module.id === "reports" || state.activeTab === 0;
  const rows = filteredCases(module.id);
  const createDisabled = !module.types ? "disabled" : "";

  byId("moduleBody").innerHTML = `
    <div class="toolbar">
      <div class="filter-row">
        <select id="statusFilter" aria-label="${text("status")}">
          <option value="" ${state.statusFilter === "" ? "selected" : ""}>${text("allStatuses")}</option>
          ${uiText.vi.statuses.map((status, index) => `<option value="${status}" ${state.statusFilter === status ? "selected" : ""}>${uiText[state.lang].statuses[index]}</option>`).join("")}
        </select>
        <button class="ghost-button" type="button" id="exportButton">${text("exportReport")}</button>
      </div>
      <button class="primary-button" type="button" id="newCaseButton" ${createDisabled}>${text("newCase")}</button>
    </div>
    ${renderFeatureCards(module)}
    ${isReport ? renderReports() : ""}
    <h3 style="margin-top:18px">${text("processingList")}</h3>
    ${renderCaseTable(rows)}
  `;
}

function renderSide(module) {
  byId("workflowList").innerHTML = module.workflow.map((item) => `<li>${item}</li>`).join("");
  byId("activityLog").innerHTML = state.logs.slice(0, 6).map((item) => `<li>${displayLog(item)}</li>`).join("");
}

function setLabelText(label, value) {
  if (label?.childNodes?.[0]) {
    label.childNodes[0].nodeValue = `${value}\n            `;
  }
}

function applyFormLanguage() {
  const form = byId("caseForm");
  if (!form) return;

  document.querySelector("#caseForm .eyebrow").textContent = text("create");
  form.querySelector(".icon-button").setAttribute("aria-label", text("close"));
  setLabelText(form.elements.type?.closest("label"), text("businessType"));
  setLabelText(form.elements.requester?.closest("label"), text("requester"));
  setLabelText(form.elements.agency?.closest("label"), text("agency"));
  setLabelText(form.elements.dueDate?.closest("label"), text("dueDate"));
  setLabelText(form.elements.attachments?.closest("label"), text("attachmentLabel"));
  setLabelText(form.elements.summary?.closest("label"), text("summary"));
  form.elements.requester.placeholder = text("requesterPlaceholder");
  form.elements.agency.placeholder = text("agencyPlaceholder");
  form.elements.summary.placeholder = text("summaryPlaceholder");
  const menuButtons = form.querySelectorAll("menu button");
  menuButtons[0].textContent = text("cancel");
  menuButtons[1].textContent = text("save");
  if (!form.elements.attachments?.files?.length) updateAttachmentSummary([]);
}

function applyStaticLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelector(".brand span").textContent = text("brandSubtitle");
  document.querySelector(".topbar .eyebrow").textContent = text("ministry");
  document.querySelector(".search-box span").textContent = text("searchLabel");
  byId("globalSearch").placeholder = text("searchPlaceholder");
  byId("languageSelect").value = state.lang;
  byId("roleSelect").innerHTML = uiText[state.lang].roles.map((role) => `<option>${role}</option>`).join("");

  const statCards = document.querySelectorAll(".stats-grid article");
  const statContent = [
    ["openCases", "openCasesHint"],
    ["signedCases", "signedCasesHint"],
    ["apiHealthy", "apiHealthyHint"],
    ["alerts", "alertsHint"]
  ];
  statCards.forEach((card, index) => {
    card.querySelector("span").textContent = text(statContent[index][0]);
    card.querySelector("small").textContent = text(statContent[index][1]);
  });

  const sideTitles = document.querySelectorAll(".side-panel h2");
  sideTitles[0].textContent = text("workflow");
  sideTitles[1].textContent = text("recentLog");
  applyFormLanguage();
}

function renderModule() {
  const module = displayModule(activeModule());
  applyStaticLanguage();
  byId("pageTitle").textContent = module.name;
  byId("moduleCode").textContent = module.code;
  byId("moduleName").textContent = module.name;
  renderNav();
  renderTabs(module);
  renderBody(module);
  renderSide(module);
  renderStats();
}

function openCaseDialog() {
  const module = activeModule();
  const localizedModule = displayModule(module);
  if (!module.types) return;

  const form = byId("caseForm");
  ensureAttachmentField(form);
  applyFormLanguage();
  byId("dialogTitle").textContent = localizedModule.name;
  form.elements.type.innerHTML = (localizedModule.types || module.types).map((type) => `<option>${type}</option>`).join("");
  form.elements.agency.value = defaultAgency(module.id);
  form.elements.dueDate.value = nextDate(5);
  form.elements.requester.value = "";
  form.elements.summary.value = "";
  form.elements.attachments.value = "";
  updateAttachmentSummary([]);
  byId("caseDialog").showModal();
}

function ensureAttachmentField(form) {
  if (form.elements.attachments) return;

  const summaryLabel = form.elements.summary.closest("label");
  const attachmentLabel = document.createElement("label");
  attachmentLabel.className = "full-span attachment-field";
  attachmentLabel.innerHTML = `
    ${text("attachmentLabel")}
    <input name="attachments" type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png" />
    <span id="attachmentSummary">${text("attachmentEmpty")}</span>
  `;
  summaryLabel.before(attachmentLabel);
}

function createCase(form) {
  const module = activeModule();
  const formData = new FormData(form);
  const attachments = Array.from(form.elements.attachments.files).map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type || "application/octet-stream"
  }));
  const prefix = module.id.slice(0, 4).toUpperCase();
  const id = `${prefix}-2026-${String(state.cases.length + 1).padStart(4, "0")}`;

  state.cases.unshift({
    id,
    module: module.id,
    type: formData.get("type"),
    requester: formData.get("requester"),
    agency: formData.get("agency"),
    dueDate: formData.get("dueDate"),
    status: "Mới tiếp nhận",
    priority: module.id === "btnn" || module.id === "integrations" ? "Cao" : "Bình thường",
    summary: formData.get("summary"),
    attachments
  });
  const attachmentNote = attachments.length
    ? (state.lang === "en" ? ` with ${attachments.length} supporting document(s)` : ` kèm ${attachments.length} tài liệu chứng minh`)
    : "";
  state.logs.unshift({
    vi: `Tạo mới ${id} - ${formData.get("type")}${attachmentNote}.`,
    en: `Created ${id} - ${formData.get("type")}${attachmentNote}.`
  });
  renderModule();
}

function advanceCase(id) {
  const order = ["Mới tiếp nhận", "Đang kiểm tra", "Đã ký số", "Đã trả kết quả"];
  const item = state.cases.find((entry) => entry.id === id);
  if (!item) return;
  item.status = order[Math.min(order.indexOf(item.status) + 1, order.length - 1)];
  state.logs.unshift({
    vi: `${id} chuyển sang trạng thái "${item.status}".`,
    en: `${id} moved to "${displayStatus(item.status)}".`
  });
  renderModule();
}

function exportCurrentCases() {
  const rows = filteredCases(activeModule().id);
  const headers = ["Ma", "Phan he", "Nghiep vu", "Nguoi yeu cau", "Co quan", "Han xu ly", "Trang thai", "Uu tien", "Tai lieu", "Noi dung"];
  const csvRows = rows.map((item) =>
    [item.id, displayModule(activeModule()).name, displayCase(item).type, displayCase(item).requester, displayCase(item).agency, item.dueDate, displayStatus(item.status), displayPriority(item.priority), attachmentNames(item.attachments), displayCase(item).summary]
      .map((value) => `"${String(value).replaceAll('"', '""')}"`)
      .join(",")
  );
  const blob = new Blob([[headers.join(","), ...csvRows].join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `bao-cao-${activeModule().id}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  state.logs.unshift({
    vi: `Kết xuất ${rows.length} dòng dữ liệu phân hệ ${activeModule().name}.`,
    en: `Exported ${rows.length} rows for ${displayModule(activeModule()).name}.`
  });
  renderModule();
}

function attachmentNames(attachments = []) {
  return attachments.map((file) => `${file.name} (${formatFileSize(file.size)})`).join("; ");
}

function formatFileSize(size = 0) {
  if (size >= 1024 * 1024) {
    return `${(size / 1024 / 1024).toFixed(1)} MB`;
  }
  if (size >= 1024) {
    return `${Math.round(size / 1024)} KB`;
  }
  return `${size} B`;
}

function updateAttachmentSummary(files) {
  const summary = byId("attachmentSummary");
  if (!summary) return;

  const selectedFiles = Array.from(files || []);
  summary.textContent = selectedFiles.length
    ? selectedFiles.map((file) => `${file.name} (${formatFileSize(file.size)})`).join(", ")
    : text("attachmentEmpty");
}

function defaultAgency(moduleId) {
  const agencies = state.lang === "en" ? {
    users: "System administration",
    bpbd: "Secured transaction registration center",
    inspection: "Secured transaction business division",
    finance: "Accounting",
    btnn: "State compensation business division",
    support: "User support desk",
    reports: "Management office",
    cms: "Editorial board",
    admin: "Operations center",
    integrations: "Integration administration"
  } : {
    users: "Quản trị hệ thống",
    bpbd: "Trung tâm ĐK GDBĐ",
    inspection: "Phòng nghiệp vụ ĐK BPBĐ",
    finance: "Kế toán",
    btnn: "Phòng nghiệp vụ BTNN",
    support: "Bộ phận hỗ trợ NSD",
    reports: "Lãnh đạo/Cục",
    cms: "Ban biên tập",
    admin: "Trung tâm vận hành",
    integrations: "Quản trị tích hợp"
  };
  return agencies[moduleId] || (state.lang === "en" ? "Department of Registration and State Compensation" : "Cục ĐKGDBĐ&BTNN");
}

function nextDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  return new Intl.DateTimeFormat(state.lang === "en" ? "en-US" : "vi-VN").format(new Date(`${value}T00:00:00`));
}

document.addEventListener("click", (event) => {
  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) {
    state.activeModule = moduleButton.dataset.module;
    state.activeTab = 0;
    renderModule();
    return;
  }

  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    state.activeTab = Number(tabButton.dataset.tab);
    renderModule();
    return;
  }

  const advanceButton = event.target.closest("[data-action='advance']");
  if (advanceButton) {
    advanceCase(advanceButton.dataset.case);
    return;
  }

  if (event.target.id === "newCaseButton") {
    openCaseDialog();
  }

  if (event.target.id === "exportButton") {
    exportCurrentCases();
  }

});

byId("globalSearch").addEventListener("input", (event) => {
  state.query = event.target.value;
  renderModule();
});

document.addEventListener("change", (event) => {
  if (event.target.id === "languageSelect") {
    state.lang = event.target.value;
    localStorage.setItem("systemLanguage", state.lang);
    state.logs.unshift({
      vi: "Chuyển đổi ngôn ngữ hệ thống sang tiếng Việt.",
      en: "Switched system language to English."
    });
    renderModule();
    return;
  }

  if (event.target.id === "statusFilter") {
    state.statusFilter = event.target.value;
    renderModule();
  }

  if (event.target.name === "attachments") {
    updateAttachmentSummary(event.target.files);
  }
});

byId("roleSelect").addEventListener("change", (event) => {
  state.logs.unshift({
    vi: `Chuyển vai trò thao tác: ${event.target.value}.`,
    en: `Changed active role: ${event.target.value}.`
  });
  renderModule();
});

byId("caseForm").addEventListener("submit", (event) => {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  createCase(event.currentTarget);
  byId("caseDialog").close();
});

renderModule();
