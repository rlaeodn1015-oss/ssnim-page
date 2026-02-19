import React from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18/client";
import {
  ChevronRight,
  CheckCircle2,
  Target,
  ClipboardList,
  UserCheck,
  AlertCircle,
  ArrowRightLeft,
  MessageSquare
} from "https://esm.sh/lucide-react@0.562.0";

const Section = ({ children, className = "" }) => (
  React.createElement("section", { className: `py-16 px-6 max-w-[720px] mx-auto w-full overflow-hidden ${className}` }, children)
);

const Badge = ({ children }) => (
  React.createElement("span", { className: "inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4" }, children)
);

const App = () => {
  return React.createElement(
    "div",
    { className: "flex flex-col items-center bg-white min-h-screen pb-24" },

    // HERO
    React.createElement(
      "section",
      { className: "w-full max-w-[720px] pt-20 pb-16 px-6 bg-white flex flex-col items-center text-center animate-fade-in" },
      React.createElement(Badge, null, "현재 강남·서초 전담 매칭 진행 중"),
      React.createElement("h1", { className: "text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6" }, "맞춤 골프레슨", React.createElement("br"), "요청 서비스"),
      React.createElement("p", { className: "text-lg text-slate-500 font-medium leading-relaxed" }, "레슨 조건을 먼저 정하고,", React.createElement("br"), "필요한 만큼만 배우세요"),
      React.createElement("div", { className: "mt-12 w-full max-w-xs bg-blue-600 h-1 rounded-full opacity-20" })
    ),

    // 고민
    React.createElement(
      Section,
      { className: "bg-slate-50" },
      React.createElement("h2", { className: "text-2xl font-bold mb-10 text-center" }, "혹시, 이런 고민", React.createElement("br"), "해보신 적 있나요?"),
      React.createElement(
        "div",
        { className: "space-y-4" },
        ["레슨 몇 번 받아도 실력이 안 느는 느낌", "장기 등록 권유가 부담스러웠던 경험", "나한테 맞는 프로를 고르기 어려웠던 경험"].map((item, idx) =>
          React.createElement(
            "div",
            { key: idx, className: "flex items-start p-5 bg-white rounded-2xl shadow-sm border border-slate-100" },
            React.createElement(AlertCircle, { className: "w-5 h-5 text-slate-400 mt-1 mr-4 shrink-0" }),
            React.createElement("p", { className: "text-slate-700 font-medium" }, item)
          )
        )
      )
    ),

    // 요약
    React.createElement(
      Section,
      { className: "text-center" },
      React.createElement("h2", { className: "text-2xl font-bold mb-6 leading-snug" }, "고민의 핵심만 남기고,", React.createElement("br"), React.createElement("span", { className: "text-blue-600" }, "불필요한 레슨은 줄였습니다.")),
      React.createElement("p", { className: "text-slate-500 leading-relaxed font-medium" }, "스승님은 프로를 나열하지 않습니다.", React.createElement("br"), "요청을 먼저 받고,", React.createElement("br"), "조건이 맞는 전문가만 연결합니다.")
    ),

    // 3 STEP
    React.createElement(
      Section,
      { className: "bg-blue-600 text-white rounded-[40px] my-4" },
      React.createElement("h2", { className: "text-2xl font-bold mb-12 text-center" }, "서비스 진행 방식"),
      React.createElement(
        "div",
        { className: "space-y-12" },
        [
          { step: "01", title: "직접 작성", desc: "고치고 싶은 문제와 횟수·예산을 직접 작성", Icon: ClipboardList },
          { step: "02", title: "내용 확인", desc: "담당자가 요청 내용을 꼼꼼히 확인", Icon: Target },
          { step: "03", title: "전문가 연결", desc: "조건이 딱 맞는 전문가만 선별하여 연결", Icon: UserCheck }
        ].map((item, idx) =>
          React.createElement(
            "div",
            { key: idx, className: "flex gap-6 items-center" },
            React.createElement("div", { className: "w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0" },
              React.createElement(item.Icon, { className: "w-8 h-8" })
            ),
            React.createElement("div", null,
              React.createElement("div", { className: "text-blue-200 text-sm font-bold mb-1" }, `STEP ${item.step}`),
              React.createElement("div", { className: "text-xl font-bold mb-1" }, item.title),
              React.createElement("div", { className: "text-blue-100/80 font-medium text-sm leading-relaxed" }, item.desc)
            )
          )
        )
      )
    ),

    // 비교
    React.createElement(
      Section,
      null,
      React.createElement("h2", { className: "text-2xl font-bold mb-10 text-center" }, "무엇이 다른가요?"),
      React.createElement("div", { className: "grid grid-cols-2 gap-4" },
        React.createElement("div", { className: "p-6 bg-slate-50 rounded-3xl border border-slate-200" },
          React.createElement("div", { className: "text-slate-400 font-bold mb-4 text-sm" }, "기존 레슨"),
          React.createElement("ul", { className: "space-y-3 text-sm text-slate-500 font-medium" },
            React.createElement("li", null, "• 견적 비교 스트레스"),
            React.createElement("li", null, "• 장기 등록 압박"),
            React.createElement("li", null, "• 잦은 영업 전화")
          )
        ),
        React.createElement("div", { className: "p-6 bg-blue-50 rounded-3xl border border-blue-200 ring-2 ring-blue-100" },
          React.createElement("div", { className: "text-blue-600 font-bold mb-4 text-sm" }, "스승님"),
          React.createElement("ul", { className: "space-y-3 text-sm text-blue-700 font-bold" },
            React.createElement("li", null, "• 요청서 기반 매칭"),
            React.createElement("li", null, "• 필요한 만큼만"),
            React.createElement("li", null, "• 상담 후 결정")
          )
        )
      )
    ),

    // 요청 예시
    React.createElement(
      Section,
      { className: "bg-slate-900 text-white rounded-[40px] my-4" },
      React.createElement("h2", { className: "text-xl font-bold mb-8 flex items-center gap-2" },
        React.createElement(MessageSquare, { className: "w-5 h-5 text-blue-400" }),
        " 실제 요청 사례"
      ),
      React.createElement("div", { className: "bg-white/10 p-6 rounded-2xl border border-white/5 mb-6" },
        React.createElement("p", { className: "text-lg font-medium leading-relaxed italic" },
          "\"아이언만 치면 생크가 납니다. ", React.createElement("br"),
          "장기 등록 말고, ", React.createElement("br"),
          React.createElement("span", { className: "text-blue-400" }, "2~3번만 제대로"),
          " 봐주실 분 있을까요?\""
        )
      ),
      React.createElement("div", { className: "flex items-center gap-3 justify-end text-blue-400 font-bold text-lg" },
        React.createElement(ArrowRightLeft, { className: "w-5 h-5" }),
        "레슨 3번 만에 문제 해결"
      )
    ),

    // 결과 문장
    React.createElement(
      Section,
      null,
      React.createElement("div", { className: "space-y-4" },
        ["맞춤 요청 후 레슨 3회로 슬라이스 탈출", "장기 등록 없이 필요한 부분만 교정", "조건 맞는 전문가만 연결돼 시간 절약"].map((item, idx) =>
          React.createElement("div", { key: idx, className: "flex items-center gap-3 p-4 bg-white border-b border-slate-100" },
            React.createElement(CheckCircle2, { className: "w-5 h-5 text-blue-500 shrink-0" }),
            React.createElement("span", { className: "font-medium text-slate-700" }, item)
          )
        )
      )
    ),

    // CTA
    React.createElement(
      Section,
      { className: "text-center pb-10" },
      React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "내 요청 가능한지", React.createElement("br"), "먼저 확인해보세요"),
      React.createElement("p", { className: "text-slate-500 font-medium mb-10 text-sm" }, "상담만 진행 / 아직 결제 아님", React.createElement("br"), "요청은 무료입니다"),
      React.createElement("div", { className: "w-full h-16" })
    ),

    // footer
    React.createElement(
      "footer",
      { className: "w-full max-w-[720px] py-12 px-6 border-t border-slate-100 text-center" },
      React.createElement("p", { className: "text-slate-400 text-sm font-medium leading-relaxed" }, "스승님은", React.createElement("br"), "필요 없는 레슨을 줄이는 데 집중합니다.")
    ),

    // fixed button
    React.createElement(
      "div",
      { className: "fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[720px] p-4 bg-white/80 backdrop-blur-lg border-t border-slate-100 z-50" },
      React.createElement(
        "button",
        {
          className: "w-full py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-700 active:scale-[0.98] transition-all shadow-xl shadow-blue-200",
          onClick: () => alert("여기에 구글폼/카카오채널 링크를 연결하면 됩니다.")
        },
        "맞춤 레슨 요청하기",
        React.createElement(ChevronRight, { className: "w-5 h-5" })
      )
    )
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
