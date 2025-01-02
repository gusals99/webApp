'use client';

const projects = [
  {
    title: "자체솔루션 개발",
    description: "프론트 전체 개발",
    period: "2021.05 ~ 2024.12",
    client: "NJON",
    tech: ["React", "TypeScript", "Tailwind CSS", "Cursor AI"]
  },
  {
    title: "네이버 라인 프로젝트",
    description: "Monary, Wcu, Wdm, Wftp 프로젝트의 프론트 개발",
    period: "2021.01 ~ 2024.03",
    client: "네이버 라인",
    tech: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "이랜드 Erp시스템3.0 구축",
    description: "이랜드 erp 3.0 모바일, 웹 화면 개발",
    period: "2020.03 ~ 2020.12",
    client: "이랜드",
    tech: ["JAVA", "JSP", "JavaScript", "jQuery", "ORACLE"]
  },
  {
    title: "식재료주문결제시스템",
    description: "상품재고관리, 배송관리, 회원관리, 결제관리, 운영지원, 커뮤니티 개발",
    period: "2019.12 ~ 2020.02",
    client: "한국외식업중앙회",
    tech: ["JAVA", "JSP", "JavaScript", "ORACLE"]
  },
  {
    title: "농협 국외뱅킹 시스템 구축",
    description: "대출 페이지, 고객센터 페이지, 마이페이지 개발",
    period: "2019.07 ~ 2019.11",
    client: "농협",
    tech: ["JAVA", "JSP", "JavaScript", "MS-SQL"]
  },
  {
    title: "산림조합중앙회 스마트 뱅킹",
    description: "BC체크카드 전 메뉴개발, API 연동",
    period: "2019.03 ~ 2019.06",
    client: "산림조합중앙회",
    tech: ["JAVA", "JSP", "JavaScript", "jQuery", "SEED 암호화 모듈", "BC카드 API"]
  },
  {
    title: "Private Cloud 고도화",
    description: "UI, OpenStack API 연동하여 로직 개발 및 수정",
    period: "2018.01 ~ 2019.02",
    client: "SK Telecom",
    tech: ["JAVA", "JSP", "JavaScript", "jQuery", "MySQL", "Spring", "KendoUI"]
  },
  {
    title: "hana cloud",
    description: "UI, OpenStack API 연동하여 로직 개발 및 수정",
    period: "2017.01 ~ 2017.12",
    client: "한화생명",
    tech: ["JAVA", "JSP", "JavaScript", "jQuery", "MySQL", "Spring", "KendoUI"]
  },
  {
    title: "Private Cloud",
    description: "UI, OpenStack API 연동하여 로직 개발 및 수정",
    period: "2016.06 ~ 2016.12",
    client: "SK Telecom",
    tech: ["JAVA", "JSP", "JavaScript", "jQuery", "MySQL", "Spring", "KendoUI"]
  },
  {
    title: "TP Remodeling",
    description: "Conversion, 신규개발",
    period: "2016.02 ~ 2016.05",
    client: "삼성전자",
    tech: ["JAVA", "JSP", "Oracle", "X-Platform", "Eclipse"]
  },
  {
    title: "Infra 생산설비 관리",
    description: "사용량, 실적 관리 원단위 DashBoard",
    period: "2015.08 ~ 2016.01",
    client: "삼성전자",
    tech: ["JAVA", "JSP", "jQuery", "Oracle", "KendoUI", "SDP2.5", "iBatis"]
  },
  {
    title: "취약점 진단시스템",
    description: "취약점 진단파일(xml)을 등록하여 DB로 연동",
    period: "2015.05 ~ 2015.08",
    client: "삼성전자",
    tech: ["JAVA", "JSP", "JavaScript", "MySQL", "SDP"]
  },
  {
    title: "나온 소프트 그룹웨어",
    description: "그룹웨어 5.0 QA 및 수정, 6.0 출퇴근 작성 및 외근신청 개발",
    period: "2015.01 ~ 2015.04",
    client: "나온 소프트",
    tech: ["JAVA", "JSP", "JavaScript", "jQuery", "Oracle", "Spring", "iBatis"]
  },
  {
    title: "경마공원 사이트 리뉴얼",
    description: "렛츠런 파크 사이트 리뉴얼",
    period: "2014.10 ~ 2014.12",
    client: "경마공원",
    tech: ["JAVA", "JSP", "jQuery", "전자정부프레임워크"]
  },
  {
    title: "GS 홈쇼핑 EC 통합",
    description: "주문상세, 배송현황, 배송지 변경, 렌탈상담 내역 개발",
    period: "2014.07 ~ 2014.09",
    client: "GS 홈쇼핑",
    tech: ["JAVA", "JSP", "jQuery", "Oracle", "Spring", "iBatis"]
  },
  {
    title: "웹기반 사건관리 시스템",
    description: "화면 디자인 및 Report - Design 연동",
    period: "2014.02 ~ 2014.06",
    client: "대한 상사 중재원",
    tech: ["JAVA", "JSP", "Mi-Platform", "전자정부프레임워크"]
  },
  {
    title: "현대자동차 글로벌 통합계정",
    description: "통합계정(관리자) SSO 연계 구축",
    period: "2013.08 ~ 2014.01",
    client: "현대자동차",
    tech: ["JAVA", "JSP", "Oracle", "Eclipse"]
  },
  {
    title: "이니텍 PM",
    description: "SSO 설치 및 연동",
    period: "2013.06 ~ 2013.07",
    client: "이니텍",
    tech: ["Unix", "Window", "JAVA", "MySQL"]
  },
  {
    title: "삼성자산 투자운용 사이트",
    description: "포털 구축",
    period: "2013.03 ~ 2013.05",
    client: "삼성생명",
    tech: ["JAVA", "JavaScript", "JSP", "Oracle", "Eclipse"]
  },
  {
    title: "현대자동차 재료 물산관리",
    description: "모든 화면 디자인 및 기본 로직 개발, Chart 개발",
    period: "2012.10 ~ 2013.02",
    client: "현대자동차",
    tech: ["JAVA", "JSP", "Mi-Platform", "Eclipse", "iBatis"]
  },
  {
    title: "지식경제부 G4B",
    description: "알리미 신청, 통계 조회, 부가서비스 조회 개발",
    period: "2012.07 ~ 2012.09",
    client: "지식경제부",
    tech: ["JAVA", "JSP", "Oracle", "Spring", "AJAX", "jQuery"]
  },
  {
    title: "NPS portal",
    description: "운영 및 추가 개발",
    period: "2012.02 ~ 2012.06",
    client: "국민연금",
    tech: ["JAVA", "JSP", "Mi-Platform", "X-Platform", "Pro frame C"]
  },
  {
    title: "삼성전자 SDS",
    description: "관리자용 메뉴, 코드 관리 CRUD 화면 개발",
    period: "2011.11 ~ 2011.12",
    client: "삼성전자",
    tech: ["JAVA", "Mi-Platform", "Eclipse"]
  },
  {
    title: "교육과학 기술원",
    description: "PHP -> JSP 변환 리뉴얼",
    period: "2011.10 ~ 2011.11",
    client: "교육과학 기술원",
    tech: ["JAVA", "JSP", "Oracle", "Spring", "iBatis"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            주요 프로젝트
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  {project.description}
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  발주처: {project.client}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 