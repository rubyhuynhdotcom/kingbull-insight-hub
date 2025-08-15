// KingBull Insight Hub - Data Layer
// Static data for GitHub Pages deployment

// Case Studies Data
window.caseStudiesData = [
  {
    id: 1,
    title: 'Trang trại Cá Tra - An Giang',
    location: 'An Giang, Việt Nam',
    fishType: 'Cá Tra',
    area: '25 hecta',
    duration: '8 tháng',
    production: '450 tấn',
    feedCost: '18.5',
    profit: '8.2',
    fcr: '1.18',
    roi: '44.3%',
    image: './assets/case-study-1.jpg',
    testimonial: 'Sử dụng thức ăn KingBull, FCR của tôi giảm từ 1.4 xuống 1.18, lợi nhuận tăng 35% so với vụ trước.',
    owner: 'Anh Nguyễn Văn Minh',
    details: [
      'Mật độ nuôi: 45 con/m²',
      'Thời gian nuôi: 240 ngày',
      'Tỷ lệ sống: 92%',
      'Trọng lượng thu hoạch: 1.2kg/con',
      'Giá bán: 22.500 VNĐ/kg'
    ]
  },
  {
    id: 2,
    title: 'Trang trại Cá Basa - Đồng Tháp',
    location: 'Đồng Tháp, Việt Nam',
    fishType: 'Cá Basa',
    area: '18 hecta',
    duration: '7 tháng',
    production: '320 tấn',
    feedCost: '13.2',
    profit: '6.8',
    fcr: '1.15',
    roi: '51.5%',
    image: './assets/case-study-2.jpg',
    testimonial: 'KingBull không chỉ giúp cá tăng trọng nhanh mà còn giảm thiểu bệnh tật, chi phí thuốc giảm 60%.',
    owner: 'Chị Trần Thị Lan',
    details: [
      'Mật độ nuôi: 40 con/m²',
      'Thời gian nuôi: 210 ngày',
      'Tỷ lệ sống: 94%',
      'Trọng lượng thu hoạch: 1.1kg/con',
      'Giá bán: 23.000 VNĐ/kg'
    ]
  },
  {
    id: 3,
    title: 'Trang trại Cá Điêu Hồng - Cần Thơ',
    location: 'Cần Thơ, Việt Nam',
    fishType: 'Cá Điêu Hồng',
    area: '12 hecta',
    duration: '10 tháng',
    production: '280 tấn',
    feedCost: '16.8',
    profit: '9.1',
    fcr: '1.22',
    roi: '54.2%',
    image: './assets/case-study-3.jpg',
    testimonial: 'Với KingBull, cá phát triển đều, màu sắc đẹp, giá bán cao hơn 15% so với thị trường.',
    owner: 'Ông Lê Văn Thành',
    details: [
      'Mật độ nuôi: 35 con/m²',
      'Thời gian nuôi: 300 ngày',
      'Tỷ lệ sống: 89%',
      'Trọng lượng thu hoạch: 1.8kg/con',
      'Giá bán: 32.000 VNĐ/kg'
    ]
  }
];

// Supply Locations Data for Map
window.supplyLocationsData = [
  {
    id: 1,
    name: 'Nhà máy Sản xuất Chính',
    type: 'Nhà máy',
    lat: 10.0452,
    lng: 105.7469,
    capacity: '50,000 tấn/năm',
    coverage: '13 tỉnh ĐBSCL',
    delivery: '24-48h',
    address: 'Cần Thơ, Việt Nam'
  },
  {
    id: 2,
    name: 'Kho Phân phối TP.HCM',
    type: 'Kho chính',
    lat: 10.8231,
    lng: 106.6297,
    capacity: '2,000 tấn',
    coverage: 'TP.HCM và lân cận',
    delivery: '12-24h',
    address: 'TP. Hồ Chí Minh'
  },
  {
    id: 3,
    name: 'Kho Phân phối Hà Nội',
    type: 'Kho phụ',
    lat: 21.0285,
    lng: 105.8542,
    capacity: '800 tấn',
    coverage: 'Miền Bắc',
    delivery: '24-48h',
    address: 'Hà Nội'
  },
  {
    id: 4,
    name: 'Kho Phân phối Đà Nẵng',
    type: 'Kho phụ',
    lat: 16.0544,
    lng: 108.2022,
    capacity: '500 tấn',
    coverage: 'Miền Trung',
    delivery: '24-48h',
    address: 'Đà Nẵng'
  },
  {
    id: 5,
    name: 'Kho Chuyên biệt Kiên Giang',
    type: 'Kho chuyên biệt',
    lat: 10.0125,
    lng: 105.0808,
    capacity: '1,200 tấn',
    coverage: 'Kiên Giang, An Giang',
    delivery: '6-12h',
    address: 'Kiên Giang'
  }
];

// Technical Documents Data
window.technicalDocsData = [
  {
    id: 1,
    title: 'Hướng dẫn Tối ưu FCR',
    category: 'Dinh dưỡng',
    fishTypes: ['Cá Tra', 'Cá Basa', 'Cá Điêu Hồng'],
    stage: 'Tất cả giai đoạn',
    target: 'Tối ưu hóa FCR',
    size: '2.5MB',
    description: 'Tài liệu chi tiết về công thức dinh dưỡng theo từng giai đoạn phát triển, lịch cho ăn tối ưu 24/7 và phương pháp giám sát điều chỉnh realtime để đạt FCR thấp nhất.',
    downloadUrl: './assets/docs/fcr-optimization-guide.pdf',
    features: [
      'Công thức dinh dưỡng theo từng giai đoạn',
      'Lịch cho ăn tối ưu 24/7',
      'Giám sát và điều chỉnh realtime'
    ]
  },
  {
    id: 2,
    title: 'Tiêu chuẩn Chất lượng',
    category: 'Chất lượng',
    fishTypes: ['Tất cả'],
    stage: 'Sản xuất',
    target: 'Đảm bảo chất lượng',
    size: '1.8MB',
    description: 'Hệ thống quản lý chất lượng theo tiêu chuẩn ISO 22000:2018 & HACCP, quy trình kiểm định 47 chỉ tiêu và các chứng chỉ từ SGS & Vinacert.',
    downloadUrl: './assets/docs/quality-standards.pdf',
    features: [
      'ISO 22000:2018 & HACCP',
      'Quy trình kiểm định 47 chỉ tiêu',
      'Certificate từ SGS & Vinacert'
    ]
  },
  {
    id: 3,
    title: 'Quản lý Môi trường Nước',
    category: 'Môi trường',
    fishTypes: ['Cá Tra', 'Cá Basa', 'Tôm'],
    stage: 'Nuôi trồng',
    target: 'Phòng bệnh',
    size: '3.1MB',
    description: 'Công nghệ Biofloc và RAS hiện đại, hệ thống giám sát pH, DO, NH3 tự động và phương pháp phòng ngừa bệnh hiệu quả 99%.',
    downloadUrl: './assets/docs/water-environment-management.pdf',
    features: [
      'Công nghệ Biofloc và RAS',
      'Giám sát pH, DO, NH3 tự động',
      'Phòng ngừa bệnh hiệu quả 99%'
    ]
  }
];

// News and Market Data
window.newsData = [
  {
    id: 1,
    title: 'Giá nguyên liệu tăng mạnh, thức ăn thủy sản đối mặt thách thức',
    summary: 'Giá bột cá, đậu nành tăng 15-20% trong quý III/2024, ảnh hưởng đến chi phí sản xuất thức ăn thủy sản.',
    category: 'Thị trường',
    tags: ['Giá nguyên liệu', 'Thức ăn thủy sản', 'Chi phí'],
    publishDate: '2024-08-10',
    author: 'KingBull Research Team',
    featured: true,
    readTime: '5 phút',
    content: 'Trong bối cảnh giá nguyên liệu thế giới biến động mạnh...'
  },
  {
    id: 2,
    title: 'Xuất khẩu tôm Việt Nam tăng trưởng 18% trong 7 tháng đầu năm',
    summary: 'Kim ngạch xuất khẩu tôm đạt 2.1 tỷ USD, tăng 18% so với cùng kỳ năm trước, chủ yếu vào thị trường Mỹ và EU.',
    category: 'Xuất khẩu',
    tags: ['Tôm', 'Xuất khẩu', 'Thống kê'],
    publishDate: '2024-08-08',
    author: 'Bộ NN&PTNT',
    featured: false,
    readTime: '3 phút',
    content: 'Theo số liệu từ Bộ Nông nghiệp và Phát triển nông thôn...'
  },
  {
    id: 3,
    title: 'Công nghệ RAS - Tương lai của nuôi trồng thủy sản bền vững',
    summary: 'Hệ thống tuần hoàn RAS giúp tiết kiệm 95% nước, tăng mật độ nuôi và kiểm soát môi trường tối ưu.',
    category: 'Công nghệ',
    tags: ['RAS', 'Bền vững', 'Công nghệ'],
    publishDate: '2024-08-05',
    author: 'KingBull R&D',
    featured: true,
    readTime: '7 phút',
    content: 'Hệ thống nuôi tuần hoàn RAS (Recirculating Aquaculture System)...'
  }
];

// R&D Cooperation Programs
window.rdProgramsData = [
  {
    id: 1,
    title: 'Chương trình Nghiên cứu Thức ăn Thế hệ mới',
    description: 'Hợp tác phát triển công thức thức ăn với hàm lượng protein từ côn trùng và tảo biển, giảm 30% chi phí nguyên liệu.',
    duration: '18 tháng',
    budget: '2.5 tỷ VNĐ',
    partners: ['Đại học Cần Thơ', 'Viện Nghiên cứu Nuôi trồng Thủy sản I'],
    status: 'Đang triển khai',
    benefits: [
      'Giảm 30% chi phí nguyên liệu',
      'Tăng 15% hiệu quả tiêu hóa',
      'Giảm tác động môi trường'
    ]
  },
  {
    id: 2,
    title: 'Dự án Thử nghiệm Biofloc cho Tôm Thẻ',
    description: 'Nghiên cứu ứng dụng công nghệ Biofloc trong nuôi tôm thẻ tại các trang trại pilot, mục tiêu tăng 40% năng suất.',
    duration: '12 tháng',
    budget: '1.8 tỷ VNĐ',
    partners: ['Trường Đại học Nha Trang', 'Trang trại ABC'],
    status: 'Giai đoạn 2',
    benefits: [
      'Tăng 40% năng suất',
      'Giảm 60% thay nước',
      'Tăng tỷ lệ sống lên 85%'
    ]
  },
  {
    id: 3,
    title: 'Nghiên cứu Probiotic cho Cá Tra',
    description: 'Phát triển men vi sinh chuyên biệt cho cá tra, cải thiện sức khỏe đường ruột và tăng khả năng kháng bệnh.',
    duration: '24 tháng',
    budget: '3.2 tỷ VNĐ',
    partners: ['Viện Công nghệ Sinh học', 'Đại học Bách khoa TP.HCM'],
    status: 'Khởi động',
    benefits: [
      'Tăng khả năng kháng bệnh 70%',
      'Cải thiện FCR thêm 8%',
      'Giảm sử dụng kháng sinh'
    ]
  }
];

// Dealer Portal Data
window.dealerData = {
  tier1: {
    title: 'Đại lý Cấp 1',
    minVolume: '500 tấn/năm',
    discount: 'Đến 15%',
    benefits: [
      'Chiết khấu đến 15% theo volume',
      'Bảng giá cập nhật realtime',
      'Tài liệu marketing độc quyền',
      'Hỗ trợ kỹ thuật ưu tiên',
      'Đào tạo sales & marketing'
    ],
    requirements: [
      'Doanh thu tối thiểu 500 tấn/năm',
      'Hệ thống kho bãi đạt chuẩn',
      'Đội ngũ kỹ thuật có certification',
      'Cam kết exclusive trong khu vực'
    ]
  },
  largeFarm: {
    title: 'Trang trại Quy mô lớn',
    minArea: '50 hecta',
    benefits: [
      'Tư vấn kỹ thuật cá nhân hóa',
      'Báo cáo FCR chi tiết theo ao',
      'Video training chuyên sâu',
      'Hotline kỹ thuật 24/7',
      'Hỗ trợ tài chính linh hoạt'
    ],
    services: [
      'Thiết kế hệ thống cho ăn tự động',
      'Giám sát chất lượng nước online',
      'Phân tích dữ liệu big data',
      'Tối ưu hóa chi phí vận hành'
    ]
  },
  export: {
    title: 'Đối tác Xuất khẩu',
    minVolume: '1000 tấn/năm',
    benefits: [
      'Certificate quốc tế đầy đủ',
      'OEM & private label',
      'Logistics container tối ưu',
      'Hỗ trợ tài chính linh hoạt',
      'Quality control theo chuẩn quốc tế'
    ],
    markets: [
      'Châu Âu (EU certification)',
      'Mỹ (FDA approved)',
      'Nhật Bản (JAS standard)',
      'Hàn Quốc (K-Food certified)'
    ]
  }
};

// Support Team Data
window.supportTeamData = [
  {
    id: 1,
    name: 'Ing. Nguyễn Văn Thành',
    title: 'Chuyên gia Dinh dưỡng Thủy sản',
    region: 'ĐBSCL',
    phone: '0901.234.567',
    email: 'thanh.nv@kingbull.com.vn',
    expertise: ['Cá tra', 'Cá basa', 'Tối ưu FCR'],
    experience: '15 năm',
    avatar: './assets/team/expert-1.jpg'
  },
  {
    id: 2,
    name: 'Dr. Trần Thị Lan Anh',
    title: 'Chuyên gia Bệnh học Thủy sản',
    region: 'Miền Nam',
    phone: '0901.234.568',
    email: 'lananh.tt@kingbull.com.vn',
    expertise: ['Phòng bệnh', 'Điều trị', 'Probiotic'],
    experience: '12 năm',
    avatar: './assets/team/expert-2.jpg'
  },
  {
    id: 3,
    name: 'MSc. Lê Hoàng Nam',
    title: 'Chuyên gia Môi trường Nước',
    region: 'Miền Trung',
    phone: '0901.234.569',
    email: 'nam.lh@kingbull.com.vn',
    expertise: ['RAS', 'Biofloc', 'Quản lý nước'],
    experience: '10 năm',
    avatar: './assets/team/expert-3.jpg'
  }
];

// Factory Production Data
window.factoryData = {
  capacity: {
    annual: '50,000 tấn/năm',
    monthly: '4,200 tấn/tháng',
    daily: '140 tấn/ngày',
    hourly: '6 tấn/giờ'
  },
  lines: [
    {
      name: 'Dây chuyền Cá tra',
      capacity: '25 tấn/giờ',
      products: ['Cá tra 1-2cm', 'Cá tra 2-5cm', 'Cá tra thương phẩm'],
      technology: 'Extruder twin-screw'
    },
    {
      name: 'Dây chuyền Tôm',
      capacity: '15 tấn/giờ',
      products: ['Tôm con', 'Tôm thương phẩm', 'Tôm xuất khẩu'],
      technology: 'Steam pelleting'
    },
    {
      name: 'Dây chuyền Cá nước ngọt',
      capacity: '20 tấn/giờ',
      products: ['Cá điêu hồng', 'Cá chép', 'Cá rô phi'],
      technology: 'Floating pellet'
    }
  ],
  quality: {
    standards: ['ISO 22000:2018', 'HACCP', 'GMP+', 'BAP'],
    testing: '47 chỉ tiêu',
    labs: ['SGS Vietnam', 'Vinacert', 'Lab nội bộ'],
    traceability: '100% truy xuất nguồn gốc'
  }
};

// Export all data for global access
window.KingBullData = {
  caseStudies: window.caseStudiesData,
  supplyLocations: window.supplyLocationsData,
  technicalDocs: window.technicalDocsData,
  news: window.newsData,
  rdPrograms: window.rdProgramsData,
  dealer: window.dealerData,
  supportTeam: window.supportTeamData,
  factory: window.factoryData
};