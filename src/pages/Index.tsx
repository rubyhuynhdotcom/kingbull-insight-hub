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
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Thư viện Kỹ thuật Chuyên sâu</h2>
            <p className="text-xl text-muted-foreground mb-12">Tài liệu kỹ thuật chi tiết đang được cập nhật...</p>
          </div>
        </section>

        {/* Factory Video Section */}
        <section id="factory-video" className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Video Quy trình Sản xuất & Năng lực Nhà máy</h2>
            <p className="text-xl text-muted-foreground mb-12">Video showcase đang được cập nhật...</p>
          </div>
        </section>

        {/* Dealer Portal Section */}
        <section id="dealer-portal" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Khu vực Dành cho Đại lý & Trang trại</h2>
            <p className="text-xl text-muted-foreground mb-12">Portal đại lý đang được cập nhật...</p>
          </div>
        </section>

        {/* Supply Map Section */}
        <section id="supply-map" className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Bản đồ Năng lực Cung ứng</h2>
            <p className="text-xl text-muted-foreground mb-12">Interactive map đang được cập nhật...</p>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Hỗ trợ Kỹ thuật 24/7</h2>
            <p className="text-xl text-muted-foreground mb-12">Hệ thống hỗ trợ đang được cập nhật...</p>
          </div>
        </section>

        {/* Logistics Section */}
        <section id="logistics" className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Công cụ Tính Logistics & Kho Bãi</h2>
            <p className="text-xl text-muted-foreground mb-12">Calculator đang được cập nhật...</p>
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Tin tức Ngành & Phân tích Thị trường</h2>
            <p className="text-xl text-muted-foreground mb-12">Tin tức ngành đang được cập nhật...</p>
          </div>
        </section>

        {/* R&D Cooperation Section */}
        <section id="rd-cooperation" className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8">Chương trình Hợp tác R&D</h2>
            <p className="text-xl text-muted-foreground mb-12">Chương trình R&D đang được cập nhật...</p>
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
                "Đột phá tăng, dẫn đầu lợi nhuận"
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