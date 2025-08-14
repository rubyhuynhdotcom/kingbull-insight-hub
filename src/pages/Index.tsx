import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Handle section changes
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    
    // Smooth scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'case-studies', 'technical-library', 'factory-video', 'dealer-portal', 'supply-map', 'support', 'logistics', 'news', 'rd-cooperation'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onSectionChange={handleSectionChange} />
      
      <main className="pt-16">
        {/* Home Section */}
        <section id="home">
          <HeroSection onSectionChange={handleSectionChange} />
        </section>

        {/* Case Studies Section */}
        <section id="case-studies">
          <CaseStudiesSection />
        </section>

        {/* Technical Library Section */}
        <section id="technical-library" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Thư viện Kỹ thuật Chuyên sâu</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tiết kiệm thời gian nghiên cứu với bộ tài liệu kỹ thuật hoàn chỉnh nhất ngành thủy sản
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-primary">Hướng dẫn Tối ưu FCR</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Công thức dinh dưỡng theo từng giai đoạn</li>
                  <li>• Lịch cho ăn tối ưu 24/7</li>
                  <li>• Giám sát và điều chỉnh realtime</li>
                </ul>
                <button className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90">
                  Tải PDF (2.5MB)
                </button>
              </div>
              
              <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-growth">Tiêu chuẩn Chất lượng</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• ISO 22000:2018 & HACCP</li>
                  <li>• Quy trình kiểm định 47 chỉ tiêu</li>
                  <li>• Certificate từ SGS & Vinacert</li>
                </ul>
                <button className="bg-growth text-growth-foreground px-4 py-2 rounded hover:bg-growth/90">
                  Tải PDF (1.8MB)
                </button>
              </div>
              
              <div className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-profit">Quản lý Môi trường Nước</h3>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• Công nghệ Biofloc và RAS</li>
                  <li>• Giám sát pH, DO, NH3 tự động</li>
                  <li>• Phòng ngừa bệnh hiệu quả 99%</li>
                </ul>
                <button className="bg-profit text-profit-foreground px-4 py-2 rounded hover:bg-profit/90">
                  Tải PDF (3.1MB)
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Factory Video Section */}
        <section id="factory-video" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Video Quy trình Sản xuất & Năng lực Nhà máy</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Minh bạch 100% quy trình sản xuất với công nghệ châu Âu hàng đầu
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">Dây chuyền Sản xuất Tự động</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center"><span className="w-2 h-2 bg-growth rounded-full mr-3"></span>Công suất 50,000 tấn/năm</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-growth rounded-full mr-3"></span>Hệ thống trộn chính xác ±0.1%</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-growth rounded-full mr-3"></span>Kiểm soát nhiệt độ tự động</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-growth rounded-full mr-3"></span>Đóng gói vacuum kín khí</li>
                  </ul>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="text-2xl font-semibold mb-4 text-profit">Kiểm định Chất lượng</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center"><span className="w-2 h-2 bg-profit rounded-full mr-3"></span>Lab tiêu chuẩn quốc tế</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-profit rounded-full mr-3"></span>47 chỉ tiêu phân tích</li>
                    <li className="flex items-center"><span className="w-2 h-2 bg-profit rounded-full mr-3"></span>Truy xuất nguồn gốc 100%</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-growth/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Video Tour Nhà máy</h4>
                    <p className="text-sm text-muted-foreground">Flycam 4K toàn cảnh quy trình</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dealer Portal Section */}
        <section id="dealer-portal" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Khu vực Dành cho Đại lý & Trang trại</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Portal độc quyền B2B - Truy cập nhanh thông tin, ưu đãi và hỗ trợ chuyên biệt
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 border border-primary/20">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Đại lý Cấp 1</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Chiết khấu đến 15% theo volume
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Bảng giá cập nhật realtime
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Tài liệu marketing độc quyền
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Hỗ trợ kỹ thuật ưu tiên
                  </li>
                </ul>
                <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90">
                  Đăng nhập Portal
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-growth/10 to-growth/5 rounded-lg p-8 border border-growth/20">
                <h3 className="text-2xl font-semibold mb-6 text-growth">Trang trại Quy mô lớn</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-growth rounded-full mr-3"></span>
                    Tư vấn kỹ thuật cá nhân hóa
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-growth rounded-full mr-3"></span>
                    Báo cáo FCR chi tiết theo ao
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-growth rounded-full mr-3"></span>
                    Video training chuyên sâu
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-growth rounded-full mr-3"></span>
                    Hotline kỹ thuật 24/7
                  </li>
                </ul>
                <button className="w-full bg-growth text-growth-foreground py-3 rounded hover:bg-growth/90">
                  Truy cập Tài liệu
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-profit/10 to-profit/5 rounded-lg p-8 border border-profit/20">
                <h3 className="text-2xl font-semibold mb-6 text-profit">Đối tác Xuất khẩu</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-profit rounded-full mr-3"></span>
                    Certificate quốc tế đầy đủ
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-profit rounded-full mr-3"></span>
                    OEM & private label
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-profit rounded-full mr-3"></span>
                    Logistics container tối ưu
                  </li>
                  <li className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-profit rounded-full mr-3"></span>
                    Hỗ trợ tài chính linh hoạt
                  </li>
                </ul>
                <Button 
  size="lg"
  variant="outline"
  onClick={() => onSectionChange('support')}
  className="bg-blue-500 text-white hover:bg-blue-600 backdrop-blur-sm text-lg px-8 py-6"
>
  Liên hệ Hợp tác
</Button>

{/*                 <button className="w-full bg-profit text-profit-foreground py-3 rounded hover:bg-profit/90">
                  Liên hệ Export
                </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Supply Map Section */}
        <section id="supply-map" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Bản đồ Năng lực Cung ứng</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mạng lưới cung ứng toàn quốc - Giao hàng nhanh nhất, chi phí tối ưu
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="w-3 h-3 bg-primary rounded-full mr-3"></span>
                    Nhà máy Sản xuất Chính
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">Cần Thơ - Trung tâm ĐBSCL</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Công suất: 50,000 tấn/năm</div>
                    <div>Kho lạnh: 5,000 tấn</div>
                    <div>Phủ sóng: 13 tỉnh</div>
                    <div>Giao hàng: 24-48h</div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="w-3 h-3 bg-growth rounded-full mr-3"></span>
                    Kho Phân phối Khu vực
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>TP.HCM (Kho chính)</span>
                      <span className="text-growth">2,000 tấn</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hà Nội (Kho phụ)</span>
                      <span className="text-growth">800 tấn</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Đà Nẵng (Kho phụ)</span>
                      <span className="text-growth">500 tấn</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Kiên Giang (Kho chuyên biệt)</span>
                      <span className="text-growth">1,200 tấn</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <span className="w-3 h-3 bg-profit rounded-full mr-3"></span>
                    Logistics Thông minh
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>Xe tải: 25 chiếc</div>
                    <div>Container: 15 chiếc</div>
                    <div>GPS Tracking: 100%</div>
                    <div>Giám sát nhiệt độ: Realtime</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-growth/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Interactive Map</h4>
                    <p className="text-sm text-muted-foreground">Click để xem chi tiết từng khu vực</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Hỗ trợ Kỹ thuật 24/7</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Đội ngũ chuyên gia thủy sản sẵn sàng - Phản hồi trong 15 phút, giải quyết trong 2 giờ
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-primary/10 rounded-lg p-6 text-center border border-primary/20">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Hotline Kỹ thuật</h3>
                <p className="text-sm text-muted-foreground mb-3">058.708.5649</p>
                <p className="text-xs text-primary font-medium">24/7 - Miễn phí</p>
              </div>
              
              <div className="bg-growth/10 rounded-lg p-6 text-center border border-growth/20">
                <div className="w-12 h-12 bg-growth rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-growth-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Chat Zalo OA</h3>
                <p className="text-sm text-muted-foreground mb-3">@kingbullvn</p>
                <p className="text-xs text-growth font-medium">Phản hồi 15 phút</p>
              </div>
              
              <div className="bg-profit/10 rounded-lg p-6 text-center border border-profit/20">
                <div className="w-12 h-12 bg-profit rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-profit-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Chuyên gia Thực địa</h3>
                <p className="text-sm text-muted-foreground mb-3">15 kỹ sư toàn quốc</p>
                <p className="text-xs text-profit font-medium">Đến tận trại</p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-6 text-center border border-secondary/20">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-secondary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Cam kết SLA</h3>
                <p className="text-sm text-muted-foreground mb-3">Phản hồi &lt; 15 phút</p>
                <p className="text-xs text-secondary font-medium">Giải quyết &lt; 2 giờ</p>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-2xl font-semibold mb-6 text-center">Đặt lịch Tư vấn Chuyên sâu</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tên trang trại / Công ty</label>
                    <input type="text" className="w-full p-3 border rounded" placeholder="Nhập tên trang trại"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Số điện thoại</label>
                    <input type="tel" className="w-full p-3 border rounded" placeholder="Số điện thoại liên hệ"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Loại cá nuôi</label>
                    <select className="w-full p-3 border rounded">
                      <option>Chọn loại cá</option>
                      <option>Cá tra, cá basa</option>
                      <option>Cá lóc</option>
                      <option>Cá rô phi</option>
                      <option>Tôm sú, tôm thẻ</option>
                      <option>Khác</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Diện tích ao nuôi (ha)</label>
                    <input type="number" className="w-full p-3 border rounded" placeholder="Diện tích"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Vấn đề cần tư vấn</label>
                    <select className="w-full p-3 border rounded">
                      <option>Chọn vấn đề</option>
                      <option>Tối ưu FCR</option>
                      <option>Phòng chống bệnh</option>
                      <option>Tăng tốc độ sinh trưởng</option>
                      <option>Quản lý chất lượng nước</option>
                      <option>Tối ưu chi phí vận hành</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Thời gian phù hợp</label>
                    <select className="w-full p-3 border rounded">
                      <option>Chọn thời gian</option>
                      <option>Sáng (8:00 - 12:00)</option>
                      <option>Chiều (13:00 - 17:00)</option>
                      <option>Tối (18:00 - 20:00)</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg mt-6 font-semibold hover:bg-primary/90">
                Đặt lịch Tư vấn Miễn phí
              </button>
            </div>
          </div>
        </section>

        {/* Logistics Section */}
        <section id="logistics" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Công cụ Tính Logistics & Kho Bãi</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tối ưu chi phí vận chuyển và lưu kho - Tính toán chính xác trong 30 giây
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-background rounded-lg p-8 border">
                <h3 className="text-2xl font-semibold mb-6">Tính Chi phí Logistics</h3>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Sản phẩm</label>
                      <select className="w-full p-3 border rounded">
                        <option>Chọn sản phẩm</option>
                        <option>Thức ăn cá tra 28% protein</option>
                        <option>Thức ăn cá lóc 32% protein</option>
                        <option>Thức ăn cá rô phi 30% protein</option>
                        <option>Thức ăn tôm 35% protein</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Số lượng (tấn)</label>
                      <input type="number" className="w-full p-3 border rounded" placeholder="Ví dụ: 20"/>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Điểm xuất phát</label>
                      <select className="w-full p-3 border rounded">
                        <option>Chọn kho xuất</option>
                        <option>Nhà máy Cần Thơ</option>
                        <option>Kho TP.HCM</option>
                        <option>Kho Hà Nội</option>
                        <option>Kho Đà Nẵng</option>
                        <option>Kho Kiên Giang</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Điểm đến</label>
                      <input type="text" className="w-full p-3 border rounded" placeholder="Địa chỉ giao hàng"/>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Loại vận chuyển</label>
                    <div className="grid grid-cols-3 gap-3">
                      <label className="flex items-center space-x-2 p-3 border rounded cursor-pointer hover:bg-muted">
                        <input type="radio" name="transport" value="truck"/>
                        <span className="text-sm">Xe tải</span>
                      </label>
                      <label className="flex items-center space-x-2 p-3 border rounded cursor-pointer hover:bg-muted">
                        <input type="radio" name="transport" value="container"/>
                        <span className="text-sm">Container</span>
                      </label>
                      <label className="flex items-center space-x-2 p-3 border rounded cursor-pointer hover:bg-muted">
                        <input type="radio" name="transport" value="boat"/>
                        <span className="text-sm">Tàu thủy</span>
                      </label>
                    </div>
                  </div>
                  
                  <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90">
                    Tính Chi phí Logistics
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Kết quả Tính toán</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Chi phí vận chuyển</span>
                      <span className="font-semibold">2,500,000 VNĐ</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Thời gian giao hàng</span>
                      <span className="font-semibold">24-48 giờ</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Số chuyến xe</span>
                      <span className="font-semibold">2 chuyến</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm text-muted-foreground">Kho khả dụng</span>
                      <span className="font-semibold text-growth">Có sẵn</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">Tổng chi phí</span>
                      <span className="font-bold text-lg text-profit">2,500,000 VNĐ</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-growth/10 to-profit/10 rounded-lg p-6 border border-growth/20">
                  <h3 className="text-xl font-semibold mb-4">Tối ưu hóa Gợi ý</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-growth rounded-full mr-3"></span>
                      Gộp đơn với trang trại lân cận giảm 15% chi phí
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-profit rounded-full mr-3"></span>
                      Đặt hàng &gt;= 50 tấn miễn phí vận chuyển
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Lưu kho trước mùa cao điểm tiết kiệm 8%
                    </li>
                  </ul>
                </div>
                
                <div className="bg-background rounded-lg p-6 border">
                  <h3 className="text-xl font-semibold mb-4">Lưu kho Thông minh</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center p-3 bg-muted rounded">
                      <div className="font-semibold text-lg">850 tấn</div>
                      <div className="text-muted-foreground">Khả năng lưu kho</div>
                    </div>
                    <div className="text-center p-3 bg-muted rounded">
                      <div className="font-semibold text-lg">12 tháng</div>
                      <div className="text-muted-foreground">Thời gian bảo quản</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Tin tức Ngành & Phân tích Thị trường</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cập nhật xu hướng nhanh nhất - Phân tích sâu sắc từ chuyên gia hàng đầu
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <article className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-growth/20 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Hình ảnh bài viết</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Phân tích Thị trường</span>
                      <span className="text-sm text-muted-foreground">15/12/2024</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      Giá Nguyên liệu Thức ăn Thủy sản Q4/2024: Xu hướng Tăng và Cách Tối ưu Chi phí
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      Phân tích chi tiết biến động giá bột cá, đậu tương, ngô và các nguyên liệu chính. 
                      Dự báo xu hướng Q1/2025 và 7 chiến lược tối ưu chi phí cho trang trại...
                    </p>
                    <button className="text-primary hover:text-primary/80 text-sm font-medium">
                      Đọc thêm →
                    </button>
                  </div>
                </article>
                
                <article className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-growth/20 to-profit/20 flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Hình ảnh bài viết</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-growth/10 text-growth text-xs rounded-full">Công nghệ Mới</span>
                      <span className="text-sm text-muted-foreground">12/12/2024</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                      Công nghệ AI trong Nuôi Thủy sản: Cách Mạng Giám sát FCR Realtime
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      Hệ thống camera AI phân tích hành vi ăn của cá, tự động điều chỉnh lượng thức ăn 
                      giúp tối ưu FCR đến 0.15 điểm. Case study tại trang trại Đồng Tháp...
                    </p>
                    <button className="text-growth hover:text-growth/80 text-sm font-medium">
                      Đọc thêm →
                    </button>
                  </div>
                </article>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-lg font-semibold mb-4">Bảng Giá Realtime</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Bột cá Peru</span>
                      <span className="font-semibold text-profit">$1,850/tấn ↗</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Đậu tương Brazil</span>
                      <span className="font-semibold text-growth">$420/tấn ↘</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span>Ngô Ukraine</span>
                      <span className="font-semibold">$195/tấn →</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span>Cá tra xuất khẩu</span>
                      <span className="font-semibold text-primary">$2.15/kg ↗</span>
                    </div>
                  </div>
                  <button className="w-full mt-4 text-sm bg-muted py-2 rounded text-center hover:bg-muted/80">
                    Xem Đầy đủ Bảng giá
                  </button>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-lg font-semibold mb-4">Cảnh báo Dịch bệnh</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3 p-3 bg-profit/10 rounded border border-profit/20">
                      <div className="w-2 h-2 bg-profit rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-sm">Cảnh báo Cấp 2</h4>
                        <p className="text-xs text-muted-foreground">
                          Bệnh hoại tử gan tụy cấp tính (AHPND) xuất hiện tại 3 tỉnh ĐBSCL
                        </p>
                        <span className="text-xs text-profit">Cập nhật: 2 giờ trước</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3 p-3 bg-growth/10 rounded border border-growth/20">
                      <div className="w-2 h-2 bg-growth rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-sm">Thông tin Tích cực</h4>
                        <p className="text-xs text-muted-foreground">
                          Vaccine mới cho cá tra hiệu quả 95% đã được phê duyệt
                        </p>
                        <span className="text-xs text-growth">Cập nhật: 1 ngày trước</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="text-lg font-semibold mb-4">Đăng ký Nhận Tin</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Nhận bản tin hàng tuần về thị trường thủy sản
                  </p>
                  <div className="space-y-3">
                    <input type="email" placeholder="Email của bạn" className="w-full p-3 border rounded text-sm"/>
                    <button className="w-full bg-primary text-primary-foreground py-3 rounded hover:bg-primary/90 text-sm">
                      Đăng ký Miễn phí
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* R&D Cooperation Section */}
        <section id="rd-cooperation" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Chương trình Hợp tác R&D</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tiên phong nghiên cứu giải pháp tương lai - Hợp tác cùng phát triển sản phẩm đột phá
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="bg-background rounded-lg p-8 border">
                  <h3 className="text-2xl font-semibold mb-6 text-primary">Đối tác Nghiên cứu Hiện tại</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Đại học Cần Thơ</h4>
                        <p className="text-sm text-muted-foreground">Nghiên cứu công thức thức ăn bổ sung Probiotics</p>
                        <span className="text-xs text-primary">Đang triển khai</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-growth/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-growth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Viện Nghiên cứu Nuôi trồng Thủy sản II</h4>
                        <p className="text-sm text-muted-foreground">Phát triển thức ăn chức năng kháng bệnh</p>
                        <span className="text-xs text-growth">Hoàn thành 75%</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-profit/10 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-profit" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold">Trung tâm Công nghệ Sinh học TP.HCM</h4>
                        <p className="text-sm text-muted-foreground">Ứng dụng AI trong tối ưu hóa công thức</p>
                        <span className="text-xs text-profit">Giai đoạn thử nghiệm</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-8 border">
                  <h3 className="text-2xl font-semibold mb-6 text-growth">Thành tựu Đạt được</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-sm text-muted-foreground">Bằng sáng chế</div>
                    </div>
                    <div className="text-center p-4 bg-growth/5 rounded-lg">
                      <div className="text-2xl font-bold text-growth">8</div>
                      <div className="text-sm text-muted-foreground">Công thức mới</div>
                    </div>
                    <div className="text-center p-4 bg-profit/5 rounded-lg">
                      <div className="text-2xl font-bold text-profit">25%</div>
                      <div className="text-sm text-muted-foreground">Cải thiện FCR</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/5 rounded-lg">
                      <div className="text-2xl font-bold text-secondary">99%</div>
                      <div className="text-sm text-muted-foreground">Tỷ lệ sống</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-background rounded-lg p-8 border">
                  <h3 className="text-2xl font-semibold mb-6 text-profit">Dự án Mới Đang Tuyển Đối tác</h3>
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-r from-primary/10 to-growth/10 rounded-lg border border-primary/20">
                      <h4 className="font-semibold mb-2">Thức ăn Chức năng Tăng miễn dịch</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Nghiên cứu phát triển thức ăn bổ sung Immunostimulants từ thảo dược thiên nhiên
                      </p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-primary/20 text-primary px-2 py-1 rounded">Thời gian: 18 tháng</span>
                        <span className="bg-growth/20 text-growth px-2 py-1 rounded">Ngân sách: 2.5 tỷ VNĐ</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-r from-growth/10 to-profit/10 rounded-lg border border-growth/20">
                      <h4 className="font-semibold mb-2">Công nghệ Sản xuất Xanh</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Phát triển quy trình sản xuất thức ăn thủy sản thân thiện môi trường
                      </p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-growth/20 text-growth px-2 py-1 rounded">Thời gian: 24 tháng</span>
                        <span className="bg-profit/20 text-profit px-2 py-1 rounded">Ngân sách: 3.8 tỷ VNĐ</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-r from-profit/10 to-secondary/10 rounded-lg border border-profit/20">
                      <h4 className="font-semibold mb-2">Platform IoT cho Nuôi trồng Thông minh</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Tích hợp sensors, AI và blockchain trong quản lý trang trại thủy sản
                      </p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="bg-profit/20 text-profit px-2 py-1 rounded">Thời gian: 30 tháng</span>
                        <span className="bg-secondary/20 text-secondary px-2 py-1 rounded">Ngân sách: 5.2 tỷ VNĐ</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-background rounded-lg p-8 border">
                  <h3 className="text-2xl font-semibold mb-6">Quyền lợi Đối tác R&D</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Chia sẻ 100% kết quả nghiên cứu và bằng sáng chế
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-growth rounded-full mr-3"></span>
                      Ưu tiên commercialize sản phẩm từ dự án
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-profit rounded-full mr-3"></span>
                      Hỗ trợ tài chính và cơ sở vật chất đầy đủ
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                      Access vào lab và dây chuyền pilot scale
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Co-branding và marketing chung sản phẩm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg p-8 border">
              <h3 className="text-2xl font-semibold mb-6 text-center">Đăng ký Hợp tác R&D</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Tên tổ chức / Cá nhân</label>
                    <input type="text" className="w-full p-3 border rounded" placeholder="Tên đầy đủ"/>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Lĩnh vực chuyên môn</label>
                    <select className="w-full p-3 border rounded">
                      <option>Chọn lĩnh vực</option>
                      <option>Dinh dưỡng thủy sản</option>
                      <option>Công nghệ thực phẩm</option>
                      <option>Sinh học phân tử</option>
                      <option>Kỹ thuật môi trường</option>
                      <option>AI & IoT</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Kinh nghiệm R&D</label>
                    <select className="w-full p-3 border rounded">
                      <option>Chọn mức độ</option>
                      <option>Dưới 2 năm</option>
                      <option>2-5 năm</option>
                      <option>5-10 năm</option>
                      <option>Trên 10 năm</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Dự án quan tâm</label>
                    <select className="w-full p-3 border rounded">
                      <option>Chọn dự án</option>
                      <option>Thức ăn Chức năng Tăng miễn dịch</option>
                      <option>Công nghệ Sản xuất Xanh</option>
                      <option>Platform IoT cho Nuôi trồng Thông minh</option>
                      <option>Đề xuất dự án mới</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Năng lực đóng góp</label>
                    <textarea className="w-full p-3 border rounded h-24" placeholder="Mô tả năng lực, kinh nghiệm và tài nguyên có thể đóng góp..."></textarea>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-4 rounded-lg mt-6 font-semibold hover:bg-primary/90">
                Gửi Đề xuất Hợp tác
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">KINGBULL VIỆT NAM</h3>
              <p className="text-primary-foreground/80 mb-4">
                Công ty TNHH KingBull Việt Nam
              </p>
              <p className="text-sm text-primary-foreground/60">
                Mã số thuế: 1801608521
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-sm text-primary-foreground/80">
                <p>📍 Tầng 6, số 41, Cách Mạng Tháng Tám</p>
                <p>Phường Cái Khế, TP Cần Thơ, Việt Nam</p>
                <p>📞 058.708.5649</p>
                <p>✉️ admin@kingbull.com.vn</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Slogan</h4>
              <p className="text-profit font-semibold italic">
                "Đột phá tăng trưởng, dẫn đầu lợi nhuận"
              </p>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            <p>&copy; 2024 KingBull Việt Nam. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
