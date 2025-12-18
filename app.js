// Newsletter Platform JavaScript

// Application data
const appData = {
  "articles": [
    {
      "id": 1,
      "title": "全球企業轉守為攻，AI 變現能力成生存關鍵",
      "excerpt": "2025年第四季，波士頓顧問公司（BCG）與彭博社（Bloomberg）聯合發布的「CEO 雷達」報告，揭示了全球商業領袖一次決定性的戰略轉向。在經歷了長期的地緣政治焦慮與關稅防禦戰後，市場風向已從「避險」轉為「主動出擊」。",
      "date": "2025-06-14",
      "topic": "AI",
      "author": "Jocelyn",
      "readTime": "8 min read",
      "fullContent": {
        "source": "https://sponsored.bloomberg.com/immersive-story/bcg/the-ceo-radar-q4-2025",
        "sections": [
          {
            "title": "為甚麼這篇文章重要？ (Why this matters?)",
            "content": "2025年第四季，波士頓顧問公司（BCG）與彭博社（Bloomberg）聯合發布的「CEO 雷達」報告，揭示了全球商業領袖一次決定性的戰略轉向。在經歷了長期的地緣政治焦慮與關稅防禦戰後，市場風向已從「避險」轉為「主動出擊」。這篇報告的重要性在於，它戳破了 AI 炒作的泡沫，將焦點拉回最殘酷的現實：誰能跨越「AI 價值鴻溝」，誰才擁有未來。透過本團隊的整理與分析，希望能協助讀者在「喊口號」與「真獲利」的企業之間，看清 2026 年的商業競爭本質。"
          },
          {
            "title": "新聞快讀 (What Happened)",
            "content": "Global CEOs Shift Strategy: Prioritizing Growth Amidst Uncertainty\n\nAccording to the \"CEO Radar Q4 2025\" report released by Boston Consulting Group (BCG) and Bloomberg, corporate leadership is undergoing a decisive strategic pivot. After months of adopting a defensive posture due to tariff volatility and recession concerns, CEOs are now shifting towards an offensive strategy focused on growth.\n\nWhile trade uncertainties persist, mentions of defensive topics like \"Economic Slowdown\" have dropped significantly. Instead, discussions on earnings calls are increasingly centered on internal performance drivers, with mentions of Artificial Intelligence (AI) reaching historical highs. However, the report identifies a widening \"AI value gap.\" Only 5% of companies are classified as \"AI-Future Built,\" effectively scaling technology to achieve measurable Return on Investment (ROI). The majority of firms remain in the pilot phase, facing pressure from analysts to demonstrate how their tech investments are optimizing operations and supply chains."
          },
          {
            "title": "關鍵字小百科 (Vibin Dictionary)",
            "content": "• AI Value Gap (AI 價值鴻溝)\nEnglish Definition: The strategic disparity between companies that have successfully scaled AI integration to generate tangible business value and those that have stalled at the experimental stage.\n解釋：指企業在 AI 應用上的效益落差。領先企業已將 AI 整合進核心業務流程（如動態定價、供應鏈預測）並產生獲利；而落後企業仍停留在測試階段，尚未能透過 AI 創造實質的營收增長或成本優化。\n\n• ROI - Return on Investment (投資報酬率)\nEnglish Definition: A key performance metric used to evaluate the efficiency of an investment. In the context of AI, it refers to the quantifiable financial gain relative to the cost of technology implementation.\n解釋：衡量投資效益的關鍵指標。在 AI 領域，市場已不再滿足於技術的創新性，轉而嚴格審視投入的資金是否能轉化為具體的財務回報（如節省多少工時、增加多少營收）。\n\n• Tariff Policy (關稅政策)\nEnglish Definition: Government-imposed taxes on imported goods. The report notes a decline in mentions of this topic, suggesting that businesses have incorporated trade volatility into their standard risk models rather than viewing it as an unforeseen shock.\n解釋：政府對進口貨品徵收的稅金。雖然貿易壁壘依然存在，但企業提及頻率下降，顯示企業已將「關稅變動」視為營運成本結構的一部分，並透過多元化供應鏈等策略進行了風險對沖。"
          },
          {
            "title": "團隊洞察 (Vibin Insight)",
            "content": "• 跨越「實驗室幻象」與「商業變現」的工程化壁壘\n從「技術驗證」走向「營運規模化」\n\n「報告中提到的『只有 5% 企業屬於 AI-Future Built』，反映了 AI 發展已進入深水區（Deep Water Zone）。前兩年，企業多處於 Proof of Concept (PoC，概念驗證) 階段，重點在於測試技術可行性。然而，2025 年 Q4 的數據顯示，資本市場的評估標準已發生質變。\n\n目前的產業痛點在於『規模化難題 (Scalability Challenge)』。許多 AI 模型在實驗室環境表現優異，但要部署到複雜的供應鏈或即時生產線時，面臨了資料治理（Data Governance）不全、算力成本過高以及與舊系統整合困難等問題。\n\n這對台灣科技產業的啟示是：未來的競爭力將取決於『AI 工程化能力』。意即，如何將一個 AI 模型轉化為穩定、可維護且具備正向 ROI 的軟體產品。懂模型架構只是基礎，能解決算力優化、資料管線（Data Pipeline）自動化的人才，才是縮小價值鴻溝的關鍵。」\n\n• 轉化「政治驚嚇」為「營運成本」的風險定價術\n風險定價後的「戰略常態化」\n\n「報告指出北美企業對『關稅政策』的提及率下降 32%，這不應被解讀為地緣政治風險的消失，而是風險的『內部化 (Internalization)』與『定價 (Pricing-in)』。\n\n美國於 2025 年通過的《One Big Beautiful Bill Act》等法案，顯示保護主義已成結構性現實。CEO 們不再將每次的關稅變動視為突發危機，而是將其納入常態性的營運風險評估模型中。企業的戰略重心已從『預測政治動向』轉移至『建立韌性供應鏈』。\n\n對於台灣供應鏈而言，這意味著客戶將提出更嚴格的『供應鏈多元化』與『產地合規』要求。台灣企業必須具備更靈活的全球佈局能力，並能利用數據證明其供應鏈在極端地緣政治情境下，仍具備不中斷的交付韌性。」"
          },
          {
            "title": "給讀者的思考 (Takeaway)",
            "content": "不要花時間焦慮那些你無法改變的大環境（如關稅、經濟衰退），去精進那些你能控制的技能（如 AI 應用、跨領域整合）。未來的職場，不獎勵「擔憂的人」，只獎勵「在混亂中還能交出成績單的人」。"
          }
        ]
      }
    },
    {
      "id": 2,
      "title": "拒絕做大國附庸！黃循財的「親新加坡」主義與地緣政治生存術",
      "excerpt": "2024年5月15日，黃循財接棒李顯龍成為新加坡第四任總理。他在就職前接受《經濟學人》的專訪，不僅是其個人政治思想，更是新加坡在地緣政治板塊移動中的定位指南。",
      "date": "2025-06-11",
      "topic": "Singapore",
      "author": "Leon",
      "readTime": "10 min read",
      "fullContent": {
        "source": "https://www.economist.com/asia/2024/05/08/lawrence-wong-in-his-own-words",
        "sections": [
          {
            "title": "為甚麼這篇文章重要？ (Why this matters?)",
            "content": "2024年5月15日，黃循財（Lawrence Wong）接棒李顯龍成為新加坡第四任總理。他在就職前接受《經濟學人》的專訪，不僅是其個人政治思想，更是新加坡在地緣政治板塊移動中的定位指南。時隔一年回看，這篇訪談對於理解黃循財政府的戰略邏輯，依然提供了不可或缺的視角。透過本團隊的整理與回顧，希望能協助讀者更精準地掌握新加坡的未來動向。"
          },
          {
            "title": "新聞快讀 (What Happened)",
            "content": "In a defining interview with The Economist just days before his inauguration as Singapore's fourth Prime Minister (PM) in May 2024, Lawrence Wong outlined his strategic roadmap for the nation. Addressing the volatile geopolitical landscape, Wong declared that the \"unipolar moment\" for the United States (US) has ended, predicting a messy transition to a multipolar world.\n\nHe firmly rejected the binary choice between Washington and Beijing, asserting a \"Pro-Singapore\" stance. Wong clarified that while Singapore is a major security cooperation partner of the US, it is not a formal ally, allowing it to maintain principled neutrality based on national interests and international law. Domestically, acknowledging the end of \"effortless growth,\" Wong introduced the \"Forward Singapore\" initiative to renew the country's social compact, aiming to address inequality and satisfy the evolving aspirations of a younger generation."
          },
          {
            "title": "關鍵字小百科 (Vibin Dictionary)",
            "content": "• Unipolar Moment (單極時刻)\nEnglish Definition: A geopolitical structure where one state exercises most of the cultural, economic, and military influence. (Specifically referring to US dominance post-Cold War).\n白話文解釋: 指冷戰結束後，美國成為全球唯一超級強權的時期。黃循財在訪談中明確指出「單極時刻已結束」，意味著世界正在碎片化。對商業決策者而言，這代表過去「跟著美國規則走」的單一策略已失效，企業必須學會適應多重標準並行的市場環境。\n\n• Bifurcation (分歧/分流)\nEnglish Definition: The division of something into two branches or parts. In this context, it refers to the splitting of global technology and trade systems into two rival camps (US vs. China).\n白話文解釋: 商業上常指供應鏈或技術標準的「脫鉤斷裂」。黃循財警告，如果美國的 \"Small yard, high fences\"（小院高牆）策略無限擴大，將導致全球經濟體系「分流」。這對台灣科技業是最大警訊：未來可能需要維護兩套互不相容的生產系統，成本將大幅上升。\n\n• Social Compact (社會契約)\nEnglish Definition: An implicit agreement among the members of a society to cooperate for social benefits, typically involving the sacrifice of some individual freedom for state protection and public goods.\n白話文解釋: 指人民與政府間的隱性承諾。過去新加坡的契約是「人民接受高壓管理換取經濟飛速成長」；黃循財提出的 \"Forward Singapore\" 則是新契約，承諾在經濟成長趨緩（不再 effortless）的現狀下，透過政策重分配來保障弱勢與多元價值，以維持社會穩定。"
          },
          {
            "title": "團隊洞察 (Vibin Insight)",
            "content": "本次新聞由 國際關係分析師 與 ESG 永續管理師 聯合分析。\n\n• 國際關係分析師觀點：精確區分「盟友」與「夥伴」的生存藝術\n台灣社會常陷入「親美 vs. 親中」的二元焦慮，但黃循財在訪談中對美國關係的定義，展現了極高段的外交辭令與戰略定力。\n\n• 重新定義「關係」的邊界： 當記者逼問新加坡是否為美國盟友時，黃循財斬釘截鐵地回答：「We are not (allies). We are a major security co-operation partner.（我們不是盟友，我們是主要的安全合作夥伴）。」 這句話深刻道出新加坡的戰略思想，「盟友 (Ally)」意味著簽署條約、有共同防禦義務（如 AUKUS, NATO）；而「夥伴 (Partner)」則是基於利益交換的務實合作。新加坡開放海空軍基地給美軍使用，換取先進武器與安全傘，但絕不承諾「跟隨美國介入所有衝突」。\n\n• 對台灣的啟示： 台灣無法像新加坡一樣完全置身事外，但我們應學習將自身價值從「地緣政治的棋子」轉化為「供應鏈的關鍵夥伴」。黃循財強調 \"Pro-Singapore\"（親新加坡），意即所有決策必須回歸本國利益，而非意識形態。在台海問題上，他強調「一中政策」與「反對武力改變現狀」並行，這是一種利用國際法 (International Law) 作為護身符的策略，而非單純依賴大國承諾。\n\n• ESG 永續管理師觀點：當「強人政治」轉向「韌性治理」\n黃循財在訪談中被問及是否具備李光耀式的「鐵腕 (Iron)」，他的回答揭示了新加坡治理模式 (Governance) 的重大轉型，這與現代企業追求的 ESG 趨勢不謀而合。\n\n• 從 Shareholders 到 Stakeholders 的治理思維： 李光耀時代追求的是類似「股東利益最大化」的高效率成長；黃循財的 \"Forward Singapore\" 則更像「利害關係人資本主義」(Stakeholder Capitalism)。 訪談中提到 \"Effortless growth is over\"（輕鬆成長的時代結束了），這意味著依靠單純的人力投入或低成本優勢已不再奏效。面對高齡化與勞動力短缺，未來的成長動力來自「創新」與「社會包容」。\n\n• S (Social) 的風險管理： 黃循財特別提到種族與宗教（如以哈衝突對國內穆斯林的影響）是潛在的動盪源。他不再使用高壓手段壓制異音，而是強調 \"Compromise\"（妥協）與 \"Engagement\"（參與）。 對台灣年輕管理者而言，這是一堂領導力課程：在 4G（第四代領導團隊）時代，權威不再來自於「我知道所有答案」，而來自於「傾聽並整合多元利益的能力」。未來的領導者，必須是社會契約的修補者，而非單純的命令下達者。"
          },
          {
            "title": "給讀者的思考 (Takeaway)",
            "content": "\"We don't create enemies, but we don't compromise our national interests.\"\n\n在這個「單極時刻」結束的混亂時代，不要迷信會有一個強大的「老大哥」能解決所有問題。 無論是國家還是個人職涯，真正的安全感不來自於選邊站，而來自於你是否具備「定義自我利益」的清晰邏輯，以及在多方角力中保持「關鍵節點 (Node)」價值的核心競爭力。"
          }
        ]
      }
    },
    {
      "id": 3,
      "title": "李顯龍的預警：『亞洲世紀』瀕臨危機 — 美中博弈下的地緣政治與台灣生存局",
      "excerpt": "回顧 2020 年 6 月，當新加坡總理李顯龍在權威期刊《外交事務》發表這篇名為〈瀕危的亞洲世紀〉專文時，全球正處於新冠疫情爆發與川普政府對中貿易戰的雙重混亂之中。",
      "date": "2025-06-10",
      "topic": "Singapore",
      "author": "Leon",
      "readTime": "12 min read",
      "fullContent": {
        "source": "https://www.foreignaffairs.com/articles/asia/2020-06-04/lee-hsien-loong-endangered-asian-century",
        "sections": [
          {
            "title": "為甚麼這篇文章重要？ (Why this matters?)",
            "content": "回顧 2020 年 6 月，當新加坡總理李顯龍在權威期刊《外交事務》（Foreign Affairs）發表這篇名為〈瀕危的亞洲世紀〉專文時，全球正處於新冠疫情爆發與川普政府對中貿易戰的雙重混亂之中。當時，許多國際觀察家抱持著一種樂觀的假設，認為美中關係的劍拔弩張或許僅是川普個人強烈風格所致，一旦白宮易主，雙邊關係或將迎來「回歸常態」的緩衝期。然而，五年後的今天回看，事實證明那是一場過於天真的誤判。拜登政府上台後，美中博弈非但沒有隨著川普卸任而減緩，反而從表面的關稅喧囂，轉入更深層、更致命的科技圍堵與供應鏈脫鉤。李顯龍當年的憂慮，如今已成為不可逆的結構性現實。\n\n這正是為何此刻重讀這篇文章顯得無比重要。李顯龍早在局勢徹底惡化前就精準預警：所謂的「亞洲世紀」並非歷史的必然，而是建立在極其脆弱的和平基礎之上；一旦大國強迫區域國家選邊站，亞洲繁榮將瞬間化為泡影。這篇文章不僅是李顯龍個人的政治遺產，更是一份精準的「地緣政治預言書」。它幫助讀者跳脫當下紛亂的新聞碎片，理解為何這場大國博弈是長期的消耗戰，並看懂在這個不再有「經濟歸經濟，政治歸政治」的時代，處於夾縫中的國家與個人，該如何尋求生存的微弱光芒。"
          },
          {
            "title": "新聞快讀 (What Happened)",
            "content": "In his seminal essay \"The Endangered Asian Century,\" Singaporean Prime Minister Lee Hsien Loong warns that the anticipated economic dominance of Asia is not inevitable. He argues that the region's past success relied on Pax Americana, which provided a stable security umbrella and open markets. However, the escalating rivalry between the United States (U.S.) and China threatens this foundation.\n\nLee highlights that Asian nations, particularly members of the Association of Southeast Asian Nations (ASEAN), face a dilemma: they rely on China as their largest trading partner but depend on the U.S. for security and high-level investment. He explicitly states that forcing these countries to choose sides would lead to \"decades of confrontation.\" Lee calls for a modus vivendi—a way for the two powers to coexist—arguing that China cannot replace the U.S. security role due to regional distrust, while the U.S. cannot easily decouple from Chinese markets."
          },
          {
            "title": "關鍵字小百科 (Vibin Dictionary)",
            "content": "• Pax Americana (美利堅治世)\nEnglish Definition: A state of relative international peace regarded as overseen by the United States (U.S.), derived from the Roman concept of Pax Romana. It refers to the post-WWII order where U.S. military and economic dominance ensured global stability.\n白話文解釋：這不是指美國統治世界，而是指二戰後建立的一套「全球操作系統」。在這套系統下，美國提供軍事保護（如第七艦隊）並制定貿易規則，讓亞洲國家（包括當年的日本、四小龍、現在的中國）能專心發展經濟而不必擔心鄰國侵略。李顯龍認為，亞洲過去 40 年的繁榮，底層邏輯正是建立在這個系統之上。\n\n• Modus Vivendi (暫定架構 / 共存之道)\nEnglish Definition: A Latin phrase meaning \"mode of living\" or \"way of life.\" In diplomacy, it refers to an arrangement or agreement that allows conflicting parties to coexist in peace, often pending a final settlement.\n白話文解釋：商業談判或外交上的「求同存異」。這並非指雙方要變成好朋友，而是承認彼此存在且有競爭關係，但為了避免毀滅性的衝突（如戰爭或經濟崩潰），雙方同意遵守一套最低限度的「相處規則」。這是李顯龍對美中關係提出的唯一解方：競爭但不毀滅。"
          },
          {
            "title": "團隊洞察 (Vibin Insight)",
            "content": "針對李顯龍總理的這篇文章，我們必須跳脫單純的「呼籲和平」表象，深入解構亞洲地緣政治正在發生的結構性板塊位移。李顯龍的焦慮來自於一個核心事實：過去支撐亞洲繁榮的「二元體系」正在瓦解。\n\n• 「政經分離」的紅利時代終結\n過去四十年，包括台灣、新加坡、韓國在內的亞洲經濟體，都奉行一套不言而喻的生存策略：「經濟靠中國，安全靠美國」。\n\n• 數據支撐：中國是大多數亞洲國家的最大貿易夥伴（例如，中國是美國第三大進口來源國，也是東協最大的出口市場）。\n• 安全依賴：然而，李顯龍精準指出，中國無法取代美國的安全角色。原因在於南海主權爭議以及東南亞國家對「華裔人口影響力」的敏感神經。\n• 現況分析：隨著美中從「戰略合作」轉向「戰略競爭」，這條中間路線變得極其狹窄。當供應鏈被賦予「國家安全」屬性（如半導體禁令、實體清單），企業將無法再單純依據成本效益（ROI）佈局，而必須選邊站。這對台灣年輕世代意味著：未來的職涯選擇，將深受地緣政治邊界影響。\n\n• 核門檻國家 (Nuclear Threshold States) 的隱憂\n文中一個極為犀利卻常被忽略的觀點是關於東北亞的核擴散。李顯龍提到，若美國撤出亞洲，日本與南韓可能被迫發展核武。\n\n• 戰略意義：這直接點破了美國駐軍的價值不僅是「保護盟友」，更是「壓制盟友核武化」的關鍵閥門。對於台灣而言，這意味著美國在第一島鏈的部署具有不可替代的剛性需求。若美國勢力退縮，東北亞將陷入軍備競賽，台灣的安全環境將急劇惡化。\n\n• 新加坡與台灣的「不對稱」處境\n雖然李顯龍強調「亞洲國家不想選邊站」，但台灣讀者必須意識到台灣與新加坡的處境截然不同：\n\n• 新加坡模式：作為主權獨立國家，新加坡能在美中之間扮演「誠實經紀人」(Honest Broker)，甚至直到 1990 年才與中國建交，以避免被視為中國的馬前卒。\n• 台灣困境：台灣處於地緣政治的風暴眼。我們不像新加坡擁有完整的外交承認與聯合國席位，這使得我們在「不選邊」的空間上趨近於零。\n\n洞察結論：李顯龍的警告對台灣的啟示在於——我們不能期待「亞洲世紀」會自動降臨。台灣必須在美國主導的供應鏈重組（如 CPTPP, Chip 4 Alliance）中成為不可或缺的關鍵節點（Critical Node），以此作為地緣政治的防護盾，而非僅僅依賴大國的善意。"
          },
          {
            "title": "給讀者的思考 (Takeaway)",
            "content": "在美中「脫鉤」(Decoupling) 與「去風險」(De-risking) 的時代，單純的語言能力或技術能力已不足夠；具備理解「地緣政治如何影響商業決策」的視野，將是你未來在跨國企業中脫穎而出的關鍵護城河。"
          }
        ]
      }
    },
    {
      "id": 4,
      "title": "OpenAI 的「Code Red」：GPT-5.2 背後的競爭焦慮與 AI 產業轉折點",
      "excerpt": "2025年12月11日，OpenAI 發布 GPT-5.2，宣稱這是其「最強大的模型」。然而，這項發布背後隱藏著一個更重要的訊號：執行長 Sam Altman 在公司內部宣布「Code Red」（紅色警戒），這是 OpenAI 成立以來首次公開承認面臨「史上最嚴峻的競爭壓力」。",
      "date": "2025-12-11",
      "topic": "AI",
      "author": "Wayne",
      "readTime": "10 min read",
      "fullContent": {
        "source": "https://www.wired.com/story/openai-gpt-launch-gemini-code-red/",
        "sections": [
          {
            "title": "為甚麼這篇文章重要？ (Why this matters?)",
            "content": "2025年12月11日，OpenAI 發布 GPT-5.2，宣稱這是其「最強大的模型」。然而，這項發布背後隱藏著一個更重要的訊號：執行長 Sam Altman 在公司內部宣布「Code Red」（紅色警戒），這是 OpenAI 成立以來首次公開承認面臨「史上最嚴峻的競爭壓力」。當 Google 的 Gemini 3 獲得業界好評，月活躍用戶數達到 6.5 億，逼近 OpenAI 的 8 億週活躍用戶時，這場 AI 競賽已從「技術領先」轉為「用戶爭奪戰」。這篇文章的重要性在於，它揭示了 AI 產業正在從「技術驅動」轉向「產品驅動」的關鍵轉折點。透過本團隊的分析，希望能協助讀者理解：在 AI 模型性能差距逐漸縮小的時代，真正的競爭優勢將來自何處。"
          },
          {
            "title": "新聞快讀 (What Happened)",
            "content": "OpenAI Launches GPT-5.2 as It Navigates 'Code Red'\n\nOpenAI has introduced GPT-5.2, its smartest artificial intelligence model yet, with performance gains across writing, coding, and reasoning benchmarks. The launch comes just days after CEO Sam Altman internally declared a \"code red,\" a company-wide push to improve ChatGPT amid intense competition from rivals.\n\n\"We announced this code red to really signal to the company that we want to marshal resources in one particular area, and that's a way to really define priorities,\" said OpenAI's CEO of applications, Fidji Simo, in a briefing with reporters on Thursday. \"We have had an increase in resources focused on ChatGPT in general.\"\n\nWhile OpenAI's models and products were considered best-in-class when ChatGPT launched in 2022, that's no longer a settled matter. The startup now faces an array of worthy challengers, perhaps none more threatening than Google, whose recently launched Gemini 3 model was received well by the tech industry. Google's Gemini app has grown at an impressive rate over the last year, now with more than 650 million monthly active users, compared to OpenAI's 800 million weekly active users.\n\nGPT-5.2 is shipping as a series of models: Instant, which responds faster and is better for information-finding; Thinking, which excels at coding, math, and planning; and Pro, the most powerful tier. GPT-5.2 Thinking notched the highest scores to date on GDPval, an OpenAI benchmark that compares performance between AI models and human professionals across 44 real-world occupations. The company says the model beat human professionals in over 70 percent of tasks, and completed them 11 times faster.\n\nOpenAI's post-training lead Max Schwarzer says the new release should also offer a substantial reduction in hallucinations. The company says GPT-5.2 Thinking hallucinated 38 percent less than GPT-5.1 on benchmarks measuring answers to factual questions.\n\nHowever, benchmark scores only tell part of the story. When OpenAI released GPT-5 earlier this year, users revolted over the model's colder responses, a trait that's difficult to measure through benchmarks alone. The company ended up releasing an update days after the launch to make the model \"warmer.\"\n\nIn October, OpenAI's head of ChatGPT, Nick Turley, sent a memo to the company declaring it was facing \"the greatest competitive pressure we've ever seen,\" according to The New York Times. To combat those pressures, Turley reportedly set a goal to increase daily active users by 5 percent before 2026."
          },
          {
            "title": "關鍵字小百科 (Vibin Dictionary)",
            "content": "• Code Red (紅色警戒)\nEnglish Definition: A term used in corporate settings to indicate an urgent, company-wide mobilization of resources to address a critical threat or opportunity. In OpenAI's case, it signals a strategic pivot to prioritize ChatGPT improvements amid intense competitive pressure.\n白話文解釋：企業內部用來表示「緊急動員」的術語。OpenAI 的 Code Red 意味著公司必須將所有資源集中在 ChatGPT 的改進上，以應對來自 Google、Meta 等對手的競爭壓力。這反映了 AI 產業已從「技術創新競賽」轉為「用戶體驗與市場佔有率」的爭奪戰。\n\n• Hallucination (幻覺/錯誤生成)\nEnglish Definition: In AI context, hallucination refers to the tendency of language models to generate plausible-sounding but factually incorrect or nonsensical information. It's one of the most significant challenges in deploying AI systems for real-world applications.\n白話文解釋：AI 模型「一本正經地胡說八道」的現象。GPT-5.2 宣稱將幻覺率降低 38%，這意味著模型在回答事實性問題時更可靠。然而，這也凸顯了一個關鍵問題：即使是最先進的 AI 模型，仍無法完全避免錯誤，這限制了 AI 在關鍵決策場景中的應用。\n\n• GDPval (GDP 基準測試)\nEnglish Definition: An OpenAI-developed benchmark that compares AI model performance against human professionals across 44 real-world occupations, measuring both accuracy and speed. The name suggests it evaluates models' ability to perform tasks that contribute to Gross Domestic Product.\n白話文解釋：OpenAI 開發的基準測試，用來比較 AI 模型與人類專業人士在 44 種職業中的表現。GPT-5.2 Thinking 在超過 70% 的任務中擊敗人類，且速度快 11 倍。這項數據顯示 AI 已從「輔助工具」進化為「替代選項」，對職場結構將產生深遠影響。\n\n• Sycophantic (過度討好)\nEnglish Definition: The tendency for an AI model to be excessively agreeable or flattering, often at the expense of accuracy or helpfulness. OpenAI has struggled to balance making ChatGPT enjoyable to use while avoiding this behavior.\n白話文解釋：AI 模型為了討好用戶而過度迎合，甚至犧牲準確性。OpenAI 面臨的挑戰是：如何在「讓對話更愉快」與「保持專業客觀」之間找到平衡。這反映了 AI 產品設計的核心難題：用戶體驗與技術誠信之間的張力。"
          },
          {
            "title": "團隊洞察 (Vibin Insight)",
            "content": "本次新聞由 AI 產品策略分析師 與 用戶體驗研究員 聯合分析。\n\n• AI 產品策略分析師觀點：從「技術護城河」到「用戶護城河」的戰略轉向\n\n「OpenAI 的 Code Red 標誌著 AI 產業的一個重要轉折點：技術優勢已不再是唯一的競爭壁壘。當 Google 的 Gemini 3 在技術層面與 GPT-5.2 差距縮小時，競爭的焦點轉向了用戶體驗、產品整合與生態系統建設。\n\n關鍵數據顯示：Google Gemini 的月活躍用戶數（650M）已逼近 OpenAI 的週活躍用戶數（800M）。這意味著 Google 的用戶留存率可能更高，或者其產品整合策略（如與 Google Search、Gmail 的深度整合）正在發揮作用。\n\nOpenAI 被迫放棄一些雄心勃勃的專案（如 ChatGPT 廣告功能），轉而專注於核心技術改進，這反映了初創公司在面對科技巨頭競爭時的資源限制。然而，這也暴露了一個更深層的問題：OpenAI 的商業模式過度依賴 ChatGPT 的用戶增長，缺乏像 Google 那樣的多產品生態系統作為緩衝。\n\n對台灣 AI 新創的啟示：未來的競爭將不再只是「誰的模型更強」，而是「誰能更好地將 AI 整合進用戶的日常工作流程」。台灣企業應該專注於垂直領域的深度整合，而非試圖建立通用型 AI 平台。」\n\n• 用戶體驗研究員觀點：當「性能指標」遇上「情感需求」的產品設計難題\n\n「GPT-5 發布後用戶對『冷漠回應』的抱怨，揭示了 AI 產品設計中的一個根本性矛盾：技術指標（如準確率、速度）與用戶情感需求之間的落差。\n\nOpenAI 發現，即使模型在基準測試中表現優異，如果用戶感覺對話『不夠溫暖』，他們仍會選擇其他產品。這導致 OpenAI 在發布後數天內緊急更新，讓模型變得更『溫暖』。這個案例說明：在 AI 產品競爭中，『用戶體驗』往往比『技術規格』更重要。\n\n更值得關注的是，OpenAI 報告顯示每週有超過 100 萬人與 ChatGPT 討論自殺議題。這反映了 AI 聊天機器人正在承擔心理健康支持的角色，但這也帶來了倫理與責任問題。OpenAI 計劃在 2026 年第一季推出『成人模式』，允許 18 歲以上用戶進行『情色對話』，這進一步凸顯了 AI 產品在滿足不同用戶需求時的複雜性。\n\n對台灣產品經理的啟示：在設計 AI 產品時，不能只關注技術指標，必須深入理解用戶的情感需求與使用情境。未來的 AI 產品競爭，將是『同理心設計』的競爭。」"
          },
          {
            "title": "給讀者的思考 (Takeaway)",
            "content": "在 AI 模型性能差距逐漸縮小的時代，真正的競爭優勢不再來自「誰的模型更強」，而是「誰能更好地理解用戶需求並將其轉化為產品體驗」。OpenAI 的 Code Red 提醒我們：即使是技術領先的公司，也必須時刻警惕市場的變化。對個人而言，這意味著未來的職涯成功將取決於你是否具備「將技術轉化為用戶價值」的能力，而非僅僅掌握最新的 AI 技術。"
          }
        ]
      }
    }
  ],
  "topics": [
    {
      "name": "AI",
      "displayName": "人工智慧",
      "description": "最新的AI技術趨勢、應用案例和未來發展",
      "color": "#4F46E5",
      "subscribers": 12500
    },
    {
      "name": "Singapore",
      "displayName": "新加坡新聞",
      "description": "新加坡最新時事、政策動態和社會發展",
      "color": "#059669",
      "subscribers": 8900
    }
  ],
  "newsletterFrequencies": [
    {"value": "daily", "label": "每日", "description": "每天接收最新文章"},
    {"value": "weekly", "label": "每週", "description": "每週精選重點文章"},
    {"value": "monthly", "label": "每月", "description": "每月深度分析報告"}
  ],
  "sampleNewsletter": {
    "subject": "本週AI與新加坡新聞精選 - VibinNews Newsletter",
    "date": "2025年6月15日",
    "personalizedIntro": "Hi Sarah, 基於您對AI和新加坡新聞的興趣，我們為您精選了本週最值得關注的文章。",
    "featuredArticles": [
      {
        "title": "The Future of AI in Content Creation",
        "excerpt": "探索人工智慧如何革命性地改變內容創作領域...",
        "link": "#"
      },
      {
        "title": "新加坡2025年經濟展望",
        "excerpt": "分析新加坡經濟發展趨勢，探討數位轉型和綠色經濟...",
        "link": "#"
      }
    ]
  }
};

// State management
let currentUser = null;
let currentFilter = 'all';

// Utility functions for detecting platform and country
function detectPlatform() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'iOS';
    }
    if (/android/i.test(userAgent)) {
        return 'Android';
    }
    if (/Mac/.test(navigator.platform)) {
        return 'macOS';
    }
    if (/Win/.test(navigator.platform)) {
        return 'Windows';
    }
    if (/Linux/.test(navigator.platform)) {
        return 'Linux';
    }
    return 'Unknown';
}

function detectCountry() {
    // Try to get country from browser language/locale
    const locale = navigator.language || navigator.userLanguage || 'en-US';
    const countryCode = locale.split('-')[1] || locale.split('_')[1] || '';
    
    // Map common country codes
    const countryMap = {
        'TW': 'TW', 'SG': 'SG', 'HK': 'HK', 'CN': 'CN',
        'US': 'US', 'JP': 'JP', 'KR': 'KR', 'MY': 'MY',
        'TH': 'TH', 'VN': 'VN', 'PH': 'PH', 'ID': 'ID',
        'AU': 'AU', 'NZ': 'NZ', 'GB': 'GB', 'CA': 'CA'
    };
    
    return countryMap[countryCode] || countryCode || 'Unknown';
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    renderArticles();
    renderTopics();
    renderSubscriptionForm();
    setupEventListeners();
    
    // Load user data from memory (simulating persistence)
    const savedUser = getCurrentUser();
    if (savedUser) {
        currentUser = savedUser;
        renderDashboard();
    }
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Scroll to section
            scrollToSection(target);
        });
    });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Article rendering and filtering
function renderArticles(filterTopic = 'all') {
    const articlesGrid = document.getElementById('articles-grid');
    const filteredArticles = filterTopic === 'all' 
        ? appData.articles 
        : appData.articles.filter(article => article.topic === filterTopic);
    
    articlesGrid.innerHTML = filteredArticles.map(article => {
        const topic = appData.topics.find(t => t.name === article.topic);
        const hasFullContent = article.fullContent ? 'data-has-content="true"' : '';
        const clickHandler = article.fullContent ? `onclick="showArticleModal(${article.id})"` : '';
        return `
            <div class="article-card" data-topic="${article.topic}" data-article-id="${article.id}" ${hasFullContent} ${clickHandler}>
                <div class="article-topic" style="background-color: ${topic.color}15; color: ${topic.color}">
                    ${topic.displayName}
                </div>
                <h3 class="article-title">${article.title}</h3>
                <p class="article-excerpt">${article.excerpt}</p>
                <div class="article-meta">
                    <div class="article-author">${article.author}</div>
                    <div class="article-read-time">${article.readTime}</div>
                </div>
            </div>
        `;
    }).join('');
}

function setupArticleFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update current filter and render articles
            currentFilter = filter;
            renderArticles(filter);
        });
    });
}

// Topic display
function renderTopics() {
    const topicsList = document.getElementById('topics-list');
    
    // Render topics preview (不再需要 checkbox，因為是固定訂閱兩個主題)
    topicsList.innerHTML = appData.topics.map(topic => `
        <div class="topic-card" style="border-color: ${topic.color}40;">
            <div class="topic-card-header" style="background-color: ${topic.color}15;">
                <div class="topic-color" style="background-color: ${topic.color}"></div>
                <div class="topic-name">${topic.displayName}</div>
            </div>
            <div class="topic-card-body">
                <p class="topic-description">${topic.description}</p>
            </div>
        </div>
    `).join('');
}

// Subscription form
function renderSubscriptionForm() {
    const form = document.getElementById('subscribe-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleSubscription();
    });
}

function handleSubscription() {
    const form = document.getElementById('subscribe-form');
    const formData = new FormData(form);
    
    const email = formData.get('email');
    const frequency = 'weekly'; // 固定為每週
    // 自動檢測平台和國家
    const platform = detectPlatform();
    const country = detectCountry();
    // 自動訂閱 AI 和新加坡新聞兩個主題
    const selectedTopics = ['AI', 'Singapore'];
    
    // Validate form
    if (!email) {
        alert('請填寫電子郵件地址');
        return;
    }
    
    // Create user subscription
    currentUser = {
        email: email,
        frequency: frequency,
        platform: platform,
        country: country,
        topics: selectedTopics,
        subscriptionDate: new Date().toISOString().split('T')[0],
        status: 'active'
    };
    
    // Save user (simulate persistence)
    saveCurrentUser(currentUser);

    // 新增：送資料到 n8n webhook
    // 注意：platform 和 country 同時放在 body 和 headers 中
    // - body 中的用於 n8n 配置從 body 讀取的情況
    // - headers 中的用於 n8n 配置從 headers 讀取的情況（如 sec-ch-ua-platform 和 x-zeabur-ip-country）
    const requestHeaders = {
        'Content-Type': 'application/json',
        // 將 platform 放入 headers（n8n 可能從 sec-ch-ua-platform 讀取）
        'sec-ch-ua-platform': platform,
        // 將 country 放入 headers（n8n 可能從 x-zeabur-ip-country 讀取）
        'x-zeabur-ip-country': country
    };
    
    fetch('https://waynetang.zeabur.app/webhook/7f609c50-3951-4b65-897d-3c4b020b9701', {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
            email: email,
            topics: selectedTopics,
            frequency: frequency,
            platform: platform,  // 保留在 body 中作為備用
            country: country,     // 保留在 body 中作為備用
            subscriptionDate: new Date().toISOString(),
            source: 'insight_hub_web'
        })
    })
    .then(response => {
        if (!response.ok) throw new Error('Webhook 發送失敗');
        // 可在這裡加上額外的 UI 提示
    })
    .catch(error => {
        alert('Webhook 發送失敗: ' + error.message);
    });
    
    // Show success message
    showSuccessToast();
    
    // Update dashboard
    renderDashboard();
    
    // Scroll to dashboard
    setTimeout(() => {
        scrollToSection('dashboard');
    }, 1000);
}

// Dashboard functionality
function renderDashboard() {
    const dashboardContent = document.getElementById('dashboard-content');
    
    if (!currentUser) {
        dashboardContent.innerHTML = `
            <div class="dashboard-placeholder">
                <p>請先完成訂閱以查看管理面板</p>
                <button class="btn btn--outline" onclick="scrollToSection('subscribe')">
                    前往訂閱
                </button>
            </div>
        `;
        return;
    }
    
    const frequencyLabel = appData.newsletterFrequencies.find(f => f.value === currentUser.frequency)?.label || currentUser.frequency;
    const subscribedTopicsInfo = currentUser.topics.map(topicName => {
        const topic = appData.topics.find(t => t.name === topicName);
        return topic ? { name: topic.displayName, color: topic.color } : null;
    }).filter(Boolean);
    
    dashboardContent.innerHTML = `
        <div class="dashboard-active">
            <div class="dashboard-card">
                <h3>訂閱資訊</h3>
                <div class="subscription-info">
                    <div class="info-item">
                        <span class="info-label">電子郵件</span>
                        <span class="info-value">${currentUser.email}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">接收頻率</span>
                        <span class="info-value">${frequencyLabel}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">訂閱日期</span>
                        <span class="info-value">${currentUser.subscriptionDate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">狀態</span>
                        <span class="status status--success">活躍</span>
                    </div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <h3>訂閱議題</h3>
                <div class="subscribed-topics">
                    ${subscribedTopicsInfo.map(topic => `
                        <span class="subscribed-topic" style="background-color: ${topic.color}15; color: ${topic.color}">
                            ${topic.name}
                        </span>
                    `).join('')}
                </div>
                <div class="dashboard-actions">
                    <button class="btn btn--secondary btn--sm" onclick="unsubscribe()">
                        取消訂閱
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Newsletter preview modal
function showNewsletterPreview() {
    const modal = document.getElementById('newsletter-modal');
    const preview = document.getElementById('newsletter-preview');
    
    // Generate personalized newsletter content
    const userTopics = currentUser.topics;
    const relevantArticles = appData.articles.filter(article => 
        userTopics.includes(article.topic)
    ).slice(0, 3);
    
    const topicNames = userTopics.map(topicName => {
        const topic = appData.topics.find(t => t.name === topicName);
        return topic ? topic.displayName : topicName;
    }).join('與');
    
    preview.innerHTML = `
        <div class="newsletter-header">
            <div class="newsletter-subject">本週${topicNames}精選 - VibinNews Newsletter</div>
            <div class="newsletter-date">${new Date().toLocaleDateString('zh-TW')}</div>
        </div>
        
        <div class="newsletter-intro">
            Hi ${currentUser.email.split('@')[0]}, 基於您對${topicNames}的興趣，我們為您精選了本週最值得關注的文章。
        </div>
        
        <div class="newsletter-articles">
            ${relevantArticles.map(article => `
                <div class="newsletter-article">
                    <h4>${article.title}</h4>
                    <p>${article.excerpt}</p>
                    <small>作者: ${article.author} | ${article.readTime}</small>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('newsletter-modal');
    modal.classList.remove('active');
}

// Article full content modal
function showArticleModal(articleId) {
    const article = appData.articles.find(a => a.id === articleId);
    if (!article || !article.fullContent) return;
    
    const modal = document.getElementById('article-modal');
    const titleElement = document.getElementById('article-modal-title');
    const contentElement = document.getElementById('article-full-content');
    const topic = appData.topics.find(t => t.name === article.topic);
    
    titleElement.textContent = article.title;
    
    let contentHTML = `
        <div class="article-header">
            <div class="article-meta-full">
                <span class="article-topic-badge" style="background-color: ${topic.color}15; color: ${topic.color}">
                    ${topic.displayName}
                </span>
                <span class="article-author-full">作者：${article.author}</span>
                <span class="article-date-full">${article.date}</span>
                <span class="article-read-time-full">${article.readTime}</span>
            </div>
            ${article.fullContent.source ? `<div class="article-source"><a href="${article.fullContent.source}" target="_blank" rel="noopener noreferrer">查看原文連結</a></div>` : ''}
        </div>
        <div class="article-excerpt-full">
            <p>${article.excerpt}</p>
        </div>
    `;
    
    if (article.fullContent.sections && article.fullContent.sections.length > 0) {
        article.fullContent.sections.forEach(section => {
            contentHTML += `
                <div class="article-section">
                    <h4 class="section-title">${section.title}</h4>
                    <div class="section-content">${formatArticleContent(section.content)}</div>
                </div>
            `;
        });
    }
    
    contentElement.innerHTML = contentHTML;
    modal.classList.add('active');
}

function closeArticleModal() {
    const modal = document.getElementById('article-modal');
    modal.classList.remove('active');
}

function formatArticleContent(content) {
    // 转义 HTML 特殊字符
    const escapeHtml = (text) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };
    
    // 将内容按双换行分割成段落
    const paragraphs = content.split('\n\n').filter(p => p.trim() !== '');
    
    return paragraphs.map(paragraph => {
        const trimmed = paragraph.trim();
        // 将单换行转换为 <br>，但保持列表格式
        const lines = trimmed.split('\n').map(line => escapeHtml(line.trim()));
        return `<p>${lines.join('<br>')}</p>`;
    }).join('');
}

// Utility functions
function modifySubscription() {
    scrollToSection('subscribe');
    
    // Pre-fill form with current data
    document.getElementById('email').value = currentUser.email;
    // 頻率固定為每週，無需設置
    
    // 主題已固定為 AI 和新加坡新聞，無需設置 checkbox
    // Platform 和 Country 會自動檢測，無需手動設置
}

function unsubscribe() {
    if (confirm('確定要取消訂閱嗎？')) {
        currentUser = null;
        clearCurrentUser();
        renderDashboard();
        showToast('已成功取消訂閱', 'info');
    }
}

function showSuccessToast() {
    const toast = document.getElementById('success-toast');
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('success-toast');
    const messageElement = toast.querySelector('.toast-message');
    
    messageElement.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Simulated persistence (in real app, this would use a backend)
function saveCurrentUser(user) {
    // In a real application, this would save to a database
    window.newsletterUser = user;
}

function getCurrentUser() {
    // In a real application, this would load from a database
    return window.newsletterUser || null;
}

function clearCurrentUser() {
    // In a real application, this would clear from database
    delete window.newsletterUser;
}

// Setup all event listeners
function setupEventListeners() {
    setupArticleFilters();
    
    // Modal close on overlay click
    document.getElementById('newsletter-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
    
    document.getElementById('article-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeArticleModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const newsletterModal = document.getElementById('newsletter-modal');
            const articleModal = document.getElementById('article-modal');
            if (newsletterModal.classList.contains('active')) {
                closeModal();
            }
            if (articleModal.classList.contains('active')) {
                closeArticleModal();
            }
        }
    });
    
    // Smooth scrolling for internal links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const target = e.target.getAttribute('href').substring(1);
            scrollToSection(target);
        }
    });
}