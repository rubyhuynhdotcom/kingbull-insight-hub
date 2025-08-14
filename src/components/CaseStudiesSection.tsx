import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar, TrendingUp, DollarSign, Fish } from 'lucide-react';

const CaseStudiesSection: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Trang trại Cá Tra - An Giang',
      location: 'An Giang, Việt Nam',
      fishType: 'Cá Tra',
      area: '25 hecta',
      duration: '8 tháng',
      production: '450 tấn',
      feedCost: '18.5 tỷ VNĐ',
      profit: '8.2 tỷ VNĐ',
      fcr: '1.18',
      roi: '44.3%',
      image: '/placeholder.svg',
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
      feedCost: '13.2 tỷ VNĐ',
      profit: '6.8 tỷ VNĐ',
      fcr: '1.15',
      roi: '51.5%',
      image: '/placeholder.svg',
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
      feedCost: '16.8 tỷ VNĐ',
      profit: '9.1 tỷ VNĐ',
      fcr: '1.22',
      roi: '54.2%',
      image: '/placeholder.svg',
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

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-primary-soft text-primary mb-4">Dự án Thành công</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hồ sơ <span className="text-primary">Dự án Nuôi</span> Thành công
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Khám phá những câu chuyện thành công từ các trang trại đối tác, 
            với dữ liệu ROI chi tiết và lời chứng thực từ chủ trại.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((caseStudy) => (
            <Card 
              key={caseStudy.id}
              className={`interactive-card cursor-pointer transition-all duration-300 ${
                selectedCase === caseStudy.id ? 'ring-2 ring-primary shadow-xl' : ''
              }`}
              onClick={() => setSelectedCase(selectedCase === caseStudy.id ? null : caseStudy.id)}
            >
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {caseStudy.location}
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary" className="bg-growth-soft text-growth">
                      <Fish className="w-3 h-3 mr-1" />
                      {caseStudy.fishType}
                    </Badge>
                    <Badge variant="secondary" className="bg-primary-soft text-primary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {caseStudy.duration}
                    </Badge>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-growth-soft rounded-lg">
                    <div className="text-2xl font-bold text-growth">{caseStudy.fcr}</div>
                    <div className="text-xs text-muted-foreground">FCR</div>
                  </div>
                  <div className="text-center p-3 bg-profit-soft rounded-lg">
                    <div className="text-2xl font-bold text-profit">{caseStudy.roi}</div>
                    <div className="text-xs text-muted-foreground">ROI</div>
                  </div>
                </div>

                {/* Basic Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Diện tích:</span>
                    <span className="font-medium">{caseStudy.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sản lượng:</span>
                    <span className="font-medium">{caseStudy.production}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lợi nhuận:</span>
                    <span className="font-medium text-growth">{caseStudy.profit}</span>
                  </div>
                </div>

                {/* Expand Button */}
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-primary hover:bg-primary-soft"
                >
                  {selectedCase === caseStudy.id ? 'Thu gọn' : 'Xem chi tiết'}
                  <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${
                    selectedCase === caseStudy.id ? 'rotate-90' : ''
                  }`} />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Detailed View */}
        {selectedCase && (
          <Card className="p-8 animate-scale-in">
            {(() => {
              const selected = caseStudies.find(c => c.id === selectedCase);
              if (!selected) return null;
              
              return (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Details & Testimonial */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="space-y-3">
                          {selected.details.slice(0, 3).map((detail, index) => (
                            <div key={index} className="text-sm">
                              <span className="text-muted-foreground">{detail.split(':')[0]}:</span>
                              <span className="font-medium ml-2">{detail.split(':')[1]}</span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-3">
                          {selected.details.slice(3).map((detail, index) => (
                            <div key={index} className="text-sm">
                              <span className="text-muted-foreground">{detail.split(':')[0]}:</span>
                              <span className="font-medium ml-2">{detail.split(':')[1]}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary-soft p-6 rounded-lg">
                      <h4 className="font-semibold mb-3 text-primary">Lời chứng thực từ chủ trại</h4>
                      <blockquote className="text-muted-foreground italic mb-3">
                        "{selected.testimonial}"
                      </blockquote>
                      <cite className="font-medium text-sm">- {selected.owner}</cite>
                    </div>
                  </div>

                  {/* Right: Financial Breakdown */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold mb-4 flex items-center">
                        <DollarSign className="w-5 h-5 mr-2 text-profit" />
                        Phân tích Tài chính Chi tiết
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="p-4 bg-growth-soft rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Tổng doanh thu</span>
                            <span className="font-bold text-lg text-growth">
                              {(parseFloat(selected.feedCost.replace(' tỷ VNĐ', '')) + parseFloat(selected.profit.replace(' tỷ VNĐ', ''))).toFixed(1)} tỷ VNĐ
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-muted rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Chi phí thức ăn</span>
                            <span className="font-medium">{selected.feedCost}</span>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-profit-soft rounded-lg">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-muted-foreground">Lợi nhuận ròng</span>
                            <span className="font-bold text-lg text-profit">{selected.profit}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-primary-soft rounded-lg">
                            <div className="text-2xl font-bold text-primary">{selected.fcr}</div>
                            <div className="text-xs text-muted-foreground">Hệ số chuyển đổi thức ăn</div>
                          </div>
                          <div className="text-center p-4 bg-growth-soft rounded-lg">
                            <div className="text-2xl font-bold text-growth">{selected.roi}</div>
                            <div className="text-xs text-muted-foreground">Tỷ suất lợi nhuận</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full btn-primary">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Tải báo cáo chi tiết (PDF)
                    </Button>
                  </div>
                </div>
              );
            })()}
          </Card>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;