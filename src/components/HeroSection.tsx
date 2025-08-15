import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, TrendingUp, Shield, Headphones, Factory } from 'lucide-react';
import heroImage from '@/assets/hero-aquafarm.jpg';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionChange }) => {
  const benefits = [
    {
      icon: Factory,
      title: 'Năng lực cung ứng lớn',
      description: 'Nhà máy hiện đại, sản xuất quy mô công nghiệp'
    },
    {
      icon: TrendingUp,
      title: 'Tối ưu lợi nhuận',
      description: 'FCR thấp, tăng trọng nhanh, ROI vượt trội'
    },
    {
      icon: Headphones,
      title: 'Hỗ trợ kỹ thuật 24/7',
      description: 'Đội ngũ chuyên gia sẵn sàng tư vấn mọi lúc'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="KingBull Aquafarm Success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                Tin cậy từ các trang trại hàng đầu Việt Nam
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white">KINGBULL</span>
                <span className="block text-profit">
                  VIỆT NAM
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl font-semibold text-profit">
                "Đột phá tăng trưởng, dẫn đầu lợi nhuận"
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                Công ty TNHH KingBull Việt Nam - Nhà cung cấp thức ăn thủy sản chất lượng cao, 
                hỗ trợ trang trại đạt hiệu quả nuôi tối ưu với FCR thấp và lợi nhuận vượt trội.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => onSectionChange('case-studies')}
                className="bg-growth hover:bg-growth/90 text-growth-foreground shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-4"
              >
                Xem Hồ sơ Dự án Thành công
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => onSectionChange('support')}
                className="border-white text-white hover:bg-white/10 backdrop-blur-sm text-base px-8 py-4"
              >
                Liên hệ Hợp tác
              </Button>
            </div>
          </div>

          {/* Right Content - Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-profit rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-profit-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}

            {/* Quick Stats */}
            <div className="p-6 bg-gradient-to-r from-growth to-profit/80 backdrop-blur-sm border border-white/20 rounded-lg text-white">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm opacity-90">Trang trại hợp tác</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1.2</div>
                  <div className="text-sm opacity-90">FCR trung bình</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">35%+</div>
                  <div className="text-sm opacity-90">Tăng lợi nhuận</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;