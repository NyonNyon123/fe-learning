const questions = [

    /* =====================================================
       テクノロジ系 1～30
    ===================================================== */

    {
        id: 1,
        category: "technology",
        question: "2進数101101を10進数で表したものはどれか。",
        choices: [
            "41",
            "43",
            "45",
            "47"
        ],
        answer: 2,
        explanation:
            "101101は、32＋8＋4＋1＝45である。",
        keyword: "2進数",
        keywordExplanation:
            "2進数は、0と1の二つの数字だけを使って数値を表現する方法である。",
        relatedWords: [
            "10進数",
            "16進数",
            "ビット"
        ]
    },

    {
        id: 2,
        category: "technology",
        question: "16進数2Fを10進数で表したものはどれか。",
        choices: [
            "31",
            "42",
            "47",
            "52"
        ],
        answer: 2,
        explanation:
            "16進数2Fは、2×16＋15＝47である。",
        keyword: "16進数",
        keywordExplanation:
            "16進数は0～9とA～Fを使い、16を基数として数値を表現する方法である。",
        relatedWords: [
            "2進数",
            "10進数",
            "基数"
        ]
    },

    {
        id: 3,
        category: "technology",
        question: "1バイトは何ビットで構成されるか。",
        choices: [
            "4ビット",
            "8ビット",
            "16ビット",
            "32ビット"
        ],
        answer: 1,
        explanation:
            "1バイトは8ビットで構成される。",
        keyword: "バイト",
        keywordExplanation:
            "バイトはデータ量を表す単位で、1バイトは8ビットである。",
        relatedWords: [
            "ビット",
            "KB",
            "MB"
        ]
    },

    {
        id: 4,
        category: "technology",
        question: "CPUの主な役割として最も適切なものはどれか。",
        choices: [
            "データを長期間保存する",
            "プログラムの命令を実行する",
            "ネットワーク回線を接続する",
            "画像だけを保存する"
        ],
        answer: 1,
        explanation:
            "CPUはプログラムの命令を解釈し、演算や制御を行う。",
        keyword: "CPU",
        keywordExplanation:
            "CPUはCentral Processing Unitの略で、コンピュータの演算や制御を担当する。",
        relatedWords: [
            "演算装置",
            "制御装置",
            "クロック周波数"
        ]
    },

    {
        id: 5,
        category: "technology",
        question: "キャッシュメモリを利用する主な目的はどれか。",
        choices: [
            "CPUと主記憶の速度差を小さくする",
            "ファイルを永久保存する",
            "画面の解像度を高くする",
            "通信速度を制限する"
        ],
        answer: 0,
        explanation:
            "高速なキャッシュメモリに頻繁に使うデータを置くことで、CPUと主記憶の速度差を補う。",
        keyword: "キャッシュメモリ",
        keywordExplanation:
            "キャッシュメモリは、CPUが頻繁に利用するデータなどを一時保存する高速なメモリである。",
        relatedWords: [
            "CPU",
            "主記憶装置",
            "RAM"
        ]
    },

    {
        id: 6,
        category: "technology",
        question: "RAMの特徴として最も適切なものはどれか。",
        choices: [
            "電源を切っても内容が残る",
            "電源を切ると内容が失われる",
            "書込みができない",
            "ネットワーク上だけで利用する"
        ],
        answer: 1,
        explanation:
            "RAMは揮発性メモリなので、電源を切ると保存内容が失われる。",
        keyword: "RAM",
        keywordExplanation:
            "RAMは処理中のプログラムやデータを一時的に保存する主記憶装置である。",
        relatedWords: [
            "ROM",
            "主記憶装置",
            "揮発性メモリ"
        ]
    },

    {
        id: 7,
        category: "technology",
        question: "仮想記憶の説明として適切なものはどれか。",
        choices: [
            "補助記憶装置の一部を主記憶のように利用する",
            "CPUを二つ搭載する",
            "データを暗号化して保存する",
            "ネットワークを仮想化する"
        ],
        answer: 0,
        explanation:
            "仮想記憶では、SSDやHDDなどの補助記憶装置の一部を主記憶の代わりとして利用する。",
        keyword: "仮想記憶",
        keywordExplanation:
            "仮想記憶は、主記憶容量が不足したときに補助記憶装置の一部を利用する仕組みである。",
        relatedWords: [
            "主記憶",
            "ページング",
            "補助記憶装置"
        ]
    },

    {
        id: 8,
        category: "technology",
        question: "RAID 1の特徴として適切なものはどれか。",
        choices: [
            "同じデータを複数のディスクに書き込む",
            "データを圧縮して保存する",
            "必ず3台以上のディスクを使用する",
            "通信データを暗号化する"
        ],
        answer: 0,
        explanation:
            "RAID 1はミラーリングを行い、同じデータを複数のディスクに保存する。",
        keyword: "RAID 1",
        keywordExplanation:
            "RAID 1はミラーリングとも呼ばれ、同一データを複数のディスクに保存して耐障害性を高める。",
        relatedWords: [
            "RAID",
            "ミラーリング",
            "耐障害性"
        ]
    },

    {
        id: 9,
        category: "technology",
        question: "OSI参照モデルにおいて、第3層に該当するものはどれか。",
        choices: [
            "物理層",
            "ネットワーク層",
            "トランスポート層",
            "セッション層"
        ],
        answer: 1,
        explanation:
            "OSI参照モデルの第3層はネットワーク層である。",
        keyword: "OSI参照モデル",
        keywordExplanation:
            "ネットワーク通信の機能を7つの階層に分けて整理したモデルである。",
        relatedWords: [
            "ネットワーク層",
            "TCP/IP",
            "プロトコル"
        ]
    },

    {
        id: 10,
        category: "technology",
        question: "IPアドレスの主な役割はどれか。",
        choices: [
            "ネットワーク上の機器を識別する",
            "パスワードを暗号化する",
            "ファイルを圧縮する",
            "CPUの速度を制御する"
        ],
        answer: 0,
        explanation:
            "IPアドレスはネットワークに接続された機器を識別するために利用される。",
        keyword: "IPアドレス",
        keywordExplanation:
            "IPアドレスはネットワークに接続された機器を識別するための番号である。",
        relatedWords: [
            "IPv4",
            "IPv6",
            "サブネットマスク"
        ]
    },

    {
        id: 11,
        category: "technology",
        question: "DNSの主な役割として適切なものはどれか。",
        choices: [
            "ドメイン名とIPアドレスを対応付ける",
            "IPアドレスを自動配布する",
            "データを暗号化する",
            "メールを送信する"
        ],
        answer: 0,
        explanation:
            "DNSはドメイン名から対応するIPアドレスを調べるなどの名前解決を行う。",
        keyword: "DNS",
        keywordExplanation:
            "DNSはDomain Name Systemの略で、ドメイン名とIPアドレスを対応付ける仕組みである。",
        relatedWords: [
            "ドメイン名",
            "IPアドレス",
            "名前解決"
        ]
    },

    {
        id: 12,
        category: "technology",
        question: "DHCPの主な役割はどれか。",
        choices: [
            "IPアドレスなどを自動的に割り当てる",
            "ドメイン名を登録する",
            "Webページを暗号化する",
            "メールを受信する"
        ],
        answer: 0,
        explanation:
            "DHCPは端末にIPアドレスなどのネットワーク設定を自動的に割り当てる。",
        keyword: "DHCP",
        keywordExplanation:
            "DHCPはネットワークに接続した端末へIPアドレスなどを自動設定する仕組みである。",
        relatedWords: [
            "IPアドレス",
            "デフォルトゲートウェイ",
            "DNS"
        ]
    },

    {
        id: 13,
        category: "technology",
        question: "HTTPSを利用する主な目的として適切なものはどれか。",
        choices: [
            "Web通信を暗号化する",
            "画像を圧縮する",
            "IPアドレスを割り当てる",
            "CPUの負荷を下げる"
        ],
        answer: 0,
        explanation:
            "HTTPSではTLSなどを利用してWebブラウザとサーバ間の通信を保護する。",
        keyword: "HTTPS",
        keywordExplanation:
            "HTTPSはHTTP通信をTLSなどによって暗号化して安全性を高める仕組みである。",
        relatedWords: [
            "HTTP",
            "TLS",
            "暗号化"
        ]
    },

    {
        id: 14,
        category: "technology",
        question: "ハッシュ関数の特徴として適切なものはどれか。",
        choices: [
            "入力データから一定長の値を生成する",
            "必ず元のデータに復元できる",
            "画像だけに利用できる",
            "ネットワーク速度を向上させる"
        ],
        answer: 0,
        explanation:
            "ハッシュ関数は任意長のデータから一定長のハッシュ値を生成する。",
        keyword: "ハッシュ関数",
        keywordExplanation:
            "ハッシュ関数はデータから一定長のハッシュ値を生成する関数で、改ざん検知などに利用される。",
        relatedWords: [
            "ハッシュ値",
            "改ざん検知",
            "SHA"
        ]
    },

    {
        id: 15,
        category: "technology",
        question: "共通鍵暗号方式の特徴として正しいものはどれか。",
        choices: [
            "暗号化と復号に同じ鍵を使用する",
            "暗号化には必ず公開鍵を使用する",
            "鍵を一切必要としない",
            "ハッシュ値だけを利用する"
        ],
        answer: 0,
        explanation:
            "共通鍵暗号方式では暗号化と復号に同じ秘密鍵を使用する。",
        keyword: "共通鍵暗号方式",
        keywordExplanation:
            "共通鍵暗号方式は、送信者と受信者が同一の秘密鍵を共有して暗号化と復号を行う方式である。",
        relatedWords: [
            "AES",
            "秘密鍵",
            "公開鍵暗号方式"
        ]
    },

    {
        id: 16,
        category: "technology",
        question: "公開鍵暗号方式で受信者だけが内容を読めるように送信する場合、暗号化に用いる鍵はどれか。",
        choices: [
            "送信者の公開鍵",
            "送信者の秘密鍵",
            "受信者の公開鍵",
            "受信者の秘密鍵"
        ],
        answer: 2,
        explanation:
            "受信者の公開鍵で暗号化し、受信者自身が秘密鍵で復号する。",
        keyword: "公開鍵暗号方式",
        keywordExplanation:
            "公開鍵暗号方式は、公開鍵と秘密鍵という異なる二つの鍵を利用する暗号方式である。",
        relatedWords: [
            "公開鍵",
            "秘密鍵",
            "RSA"
        ]
    },

    {
        id: 17,
        category: "technology",
        question: "ディジタル署名によって主に確認できるものはどれか。",
        choices: [
            "送信者の真正性とデータの改ざん有無",
            "通信速度",
            "ファイル容量",
            "IPアドレスの割当て"
        ],
        answer: 0,
        explanation:
            "ディジタル署名は送信者の確認や、データが改ざんされていないことの確認に利用される。",
        keyword: "ディジタル署名",
        keywordExplanation:
            "ディジタル署名は公開鍵暗号技術などを利用して、本人性やデータの完全性を確認する仕組みである。",
        relatedWords: [
            "公開鍵",
            "ハッシュ関数",
            "電子証明書"
        ]
    },

    {
        id: 18,
        category: "technology",
        question: "SQLで表からデータを検索するときに使用する命令はどれか。",
        choices: [
            "SELECT",
            "INSERT",
            "UPDATE",
            "DELETE"
        ],
        answer: 0,
        explanation:
            "SELECT文はデータベースの表から必要なデータを検索するときに使用する。",
        keyword: "SQL",
        keywordExplanation:
            "SQLはリレーショナルデータベースのデータ操作や定義を行うための言語である。",
        relatedWords: [
            "SELECT",
            "INSERT",
            "データベース"
        ]
    },

    {
        id: 19,
        category: "technology",
        question: "データベースにおける主キーの役割として適切なものはどれか。",
        choices: [
            "各レコードを一意に識別する",
            "全データを暗号化する",
            "ファイルを圧縮する",
            "表を削除する"
        ],
        answer: 0,
        explanation:
            "主キーは表の各レコードを一意に識別するために設定する。",
        keyword: "主キー",
        keywordExplanation:
            "主キーは、データベースの表における各レコードを重複なく識別するための項目である。",
        relatedWords: [
            "外部キー",
            "レコード",
            "テーブル"
        ]
    },

    {
        id: 20,
        category: "technology",
        question: "データベースの正規化を行う主な目的はどれか。",
        choices: [
            "データの重複や不整合を減らす",
            "通信速度を上げる",
            "画像を高画質化する",
            "CPUの性能を上げる"
        ],
        answer: 0,
        explanation:
            "正規化では表を適切に分割するなどして、データの重複や更新時の不整合を減らす。",
        keyword: "正規化",
        keywordExplanation:
            "正規化はデータベースの表を整理し、データの重複や不整合を減らす設計手法である。",
        relatedWords: [
            "第1正規形",
            "第2正規形",
            "第3正規形"
        ]
    },

    {
        id: 21,
        category: "technology",
        question: "トランザクション処理における原子性の説明として適切なものはどれか。",
        choices: [
            "一連の処理を全て実行するか全て取り消す",
            "データを必ず暗号化する",
            "処理を常に並列実行する",
            "データを永久に保存する"
        ],
        answer: 0,
        explanation:
            "原子性は一連の処理が全て成功するか、失敗時には全て取り消される性質である。",
        keyword: "トランザクション",
        keywordExplanation:
            "トランザクションは、データベースで一まとまりとして扱う一連の処理である。",
        relatedWords: [
            "ACID特性",
            "原子性",
            "ロールバック"
        ]
    },

    {
        id: 22,
        category: "technology",
        question: "スタックのデータ取出し方式として正しいものはどれか。",
        choices: [
            "FIFO",
            "LIFO",
            "ランダム",
            "優先度順のみ"
        ],
        answer: 1,
        explanation:
            "スタックは後から入れたデータを先に取り出すLIFO方式である。",
        keyword: "スタック",
        keywordExplanation:
            "スタックはデータを積み重ね、最後に格納したデータから取り出すデータ構造である。",
        relatedWords: [
            "LIFO",
            "キュー",
            "データ構造"
        ]
    },

    {
        id: 23,
        category: "technology",
        question: "キューのデータ取出し方式として正しいものはどれか。",
        choices: [
            "FIFO",
            "LIFO",
            "後入れ後出し",
            "ランダム"
        ],
        answer: 0,
        explanation:
            "キューは先に格納したデータから順に取り出すFIFO方式である。",
        keyword: "キュー",
        keywordExplanation:
            "キューは最初に格納したデータから順に取り出すデータ構造である。",
        relatedWords: [
            "FIFO",
            "スタック",
            "データ構造"
        ]
    },

    {
        id: 24,
        category: "technology",
        question: "二分探索を利用するための基本的な条件はどれか。",
        choices: [
            "データが整列されている",
            "データが暗号化されている",
            "必ず100件以上ある",
            "データが画像である"
        ],
        answer: 0,
        explanation:
            "二分探索では整列済みデータの中央と比較し、探索範囲を半分ずつ狭める。",
        keyword: "二分探索",
        keywordExplanation:
            "二分探索は、整列済みデータを半分ずつ絞り込んで目的の値を探す方法である。",
        relatedWords: [
            "線形探索",
            "探索アルゴリズム",
            "整列"
        ]
    },

    {
        id: 25,
        category: "technology",
        question: "二分探索の計算量をO記法で表したものとして適切なものはどれか。",
        choices: [
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n²)"
        ],
        answer: 1,
        explanation:
            "二分探索は探索範囲を半分ずつ減らすため、計算量はO(log n)となる。",
        keyword: "O記法",
        keywordExplanation:
            "O記法はデータ量が増えたときにアルゴリズムの処理量がどのように増加するかを表す方法である。",
        relatedWords: [
            "計算量",
            "アルゴリズム",
            "二分探索"
        ]
    },

    {
        id: 26,
        category: "technology",
        question: "単体テストの説明として最も適切なものはどれか。",
        choices: [
            "プログラムの個々のモジュールをテストする",
            "完成したシステム全体だけをテストする",
            "利用者だけが実施する",
            "ネットワーク速度だけを測定する"
        ],
        answer: 0,
        explanation:
            "単体テストではプログラムを構成する個々のモジュールや部品を対象として確認する。",
        keyword: "単体テスト",
        keywordExplanation:
            "単体テストはプログラムを構成する比較的小さな単位ごとに動作を確認するテストである。",
        relatedWords: [
            "結合テスト",
            "システムテスト",
            "テスト工程"
        ]
    },

    {
        id: 27,
        category: "technology",
        question: "ブラックボックステストの説明として適切なものはどれか。",
        choices: [
            "内部構造を意識せず入出力結果を確認する",
            "プログラム内部の全経路を確認する",
            "ハードウェアだけを確認する",
            "暗号鍵を検査する"
        ],
        answer: 0,
        explanation:
            "ブラックボックステストでは内部構造ではなく、仕様に基づいて入力と出力の関係を確認する。",
        keyword: "ブラックボックステスト",
        keywordExplanation:
            "ブラックボックステストはプログラム内部を意識せず、仕様に基づいて機能を確認する方法である。",
        relatedWords: [
            "ホワイトボックステスト",
            "同値分割",
            "境界値分析"
        ]
    },

    {
        id: 28,
        category: "technology",
        question: "サーバの仮想化によって可能になることとして適切なものはどれか。",
        choices: [
            "1台の物理サーバ上で複数の仮想マシンを動作させる",
            "CPUを使用しなくなる",
            "ネットワーク接続が不要になる",
            "全ての障害を防止できる"
        ],
        answer: 0,
        explanation:
            "仮想化技術を利用すると、一つの物理環境上に複数の論理的なコンピュータ環境を構築できる。",
        keyword: "仮想化",
        keywordExplanation:
            "仮想化は物理的なコンピュータ資源を論理的に分割・統合して利用する技術である。",
        relatedWords: [
            "仮想マシン",
            "ハイパーバイザ",
            "クラウド"
        ]
    },

    {
        id: 29,
        category: "technology",
        question: "クラウドサービスのSaaSの説明として適切なものはどれか。",
        choices: [
            "アプリケーションをネットワーク経由で利用する",
            "物理サーバだけを購入する",
            "CPUだけを貸し出す",
            "ネットワーク回線だけを提供する"
        ],
        answer: 0,
        explanation:
            "SaaSでは利用者がソフトウェアをサービスとしてネットワーク経由で利用する。",
        keyword: "SaaS",
        keywordExplanation:
            "SaaSはSoftware as a Serviceの略で、アプリケーション機能をサービスとして提供する形態である。",
        relatedWords: [
            "PaaS",
            "IaaS",
            "クラウド"
        ]
    },

    {
        id: 30,
        category: "technology",
        question: "IoTの説明として最も適切なものはどれか。",
        choices: [
            "様々な機器をネットワークに接続して情報を活用する",
            "インターネットを使用しない技術",
            "紙媒体だけを利用する仕組み",
            "CPUの製造方式"
        ],
        answer: 0,
        explanation:
            "IoTではセンサや家電、産業機器など様々なモノをネットワークにつなぎ、データを収集・活用する。",
        keyword: "IoT",
        keywordExplanation:
            "IoTはInternet of Thingsの略で、様々なモノをネットワークにつなぐ考え方である。",
        relatedWords: [
            "センサ",
            "ネットワーク",
            "エッジコンピューティング"
        ]
    },


    /* =====================================================
       マネジメント系 31～38
    ===================================================== */

    {
        id: 31,
        category: "management",
        question: "WBSの説明として最も適切なものはどれか。",
        choices: [
            "プロジェクトの作業を階層的に分解する",
            "企業の財務状況を分析する",
            "データベースを設計する",
            "通信経路を設定する"
        ],
        answer: 0,
        explanation:
            "WBSではプロジェクトに必要な作業を管理可能な単位まで階層的に分解する。",
        keyword: "WBS",
        keywordExplanation:
            "WBSはWork Breakdown Structureの略で、プロジェクト作業を階層的に分解したものである。",
        relatedWords: [
            "プロジェクト",
            "タスク",
            "スケジュール"
        ]
    },

    {
        id: 32,
        category: "management",
        question: "ガントチャートの主な用途はどれか。",
        choices: [
            "作業の予定や進捗を時間軸上で表す",
            "ネットワーク構成を表す",
            "データベースの関係を表す",
            "売上だけを分析する"
        ],
        answer: 0,
        explanation:
            "ガントチャートは各作業の開始・終了時期などを横棒で表し、スケジュール管理に利用する。",
        keyword: "ガントチャート",
        keywordExplanation:
            "ガントチャートは作業予定や進捗を横棒によって時間軸上に表す図である。",
        relatedWords: [
            "WBS",
            "工程管理",
            "スケジュール"
        ]
    },

    {
        id: 33,
        category: "management",
        question: "クリティカルパスの説明として適切なものはどれか。",
        choices: [
            "遅れるとプロジェクト全体の終了が遅れる作業経路",
            "最も費用が安い作業だけを結んだ経路",
            "最も人数が多い作業の経路",
            "ネットワーク通信の最短経路"
        ],
        answer: 0,
        explanation:
            "クリティカルパス上の作業が遅れると、原則としてプロジェクト全体の完了時期にも影響する。",
        keyword: "クリティカルパス",
        keywordExplanation:
            "クリティカルパスは、プロジェクトの完了期間を決定する重要な作業経路である。",
        relatedWords: [
            "PERT",
            "プロジェクト管理",
            "余裕時間"
        ]
    },

    {
        id: 34,
        category: "management",
        question: "EVMにおいてEVが80万円、ACが100万円の場合、CPIはいくらか。",
        choices: [
            "0.8",
            "1.0",
            "1.2",
            "1.8"
        ],
        answer: 0,
        explanation:
            "CPIはEV÷ACなので、80÷100＝0.8となる。",
        keyword: "EVM",
        keywordExplanation:
            "EVMはEarned Value Managementの略で、プロジェクトの進捗やコストを定量的に管理する手法である。",
        relatedWords: [
            "EV",
            "AC",
            "CPI"
        ]
    },

    {
        id: 35,
        category: "management",
        question: "SLAの説明として適切なものはどれか。",
        choices: [
            "サービス提供者と利用者の間でサービス水準を合意する",
            "プログラムのソースコードを管理する",
            "社員の給与を決定する",
            "データベースの主キーを決定する"
        ],
        answer: 0,
        explanation:
            "SLAではサービスの稼働率や応答時間など、提供するサービス水準について合意する。",
        keyword: "SLA",
        keywordExplanation:
            "SLAはService Level Agreementの略で、提供するITサービスの水準についての合意である。",
        relatedWords: [
            "サービスレベル",
            "可用性",
            "ITサービス管理"
        ]
    },

    {
        id: 36,
        category: "management",
        question: "インシデント管理の主な目的はどれか。",
        choices: [
            "停止・低下したITサービスを可能な限り早く復旧する",
            "新しい会社を設立する",
            "全システムを廃止する",
            "ソフトウェアの著作権を取得する"
        ],
        answer: 0,
        explanation:
            "インシデント管理では障害などによって低下したサービスを迅速に正常状態へ戻すことを重視する。",
        keyword: "インシデント管理",
        keywordExplanation:
            "インシデント管理はITサービスの中断や品質低下が発生した際に、迅速な復旧を目指す活動である。",
        relatedWords: [
            "障害",
            "サービスデスク",
            "問題管理"
        ]
    },

    {
        id: 37,
        category: "management",
        question: "ITサービス継続管理の目的として適切なものはどれか。",
        choices: [
            "災害などが発生しても必要なITサービスを継続・復旧できるよう準備する",
            "全てのデータを削除する",
            "社員数を増加させる",
            "売上を直接計算する"
        ],
        answer: 0,
        explanation:
            "ITサービス継続管理では大規模障害や災害などに備え、重要なITサービスの継続や復旧を計画する。",
        keyword: "ITサービス継続管理",
        keywordExplanation:
            "災害や重大障害が発生した場合にも重要なITサービスを維持・復旧するための管理活動である。",
        relatedWords: [
            "BCP",
            "災害対策",
            "可用性"
        ]
    },

    {
        id: 38,
        category: "management",
        question: "システム監査の説明として適切なものはどれか。",
        choices: [
            "独立した立場から情報システムを評価する",
            "必ずシステム開発者本人が実施する",
            "商品の販売価格だけを決める",
            "ネットワーク機器だけを修理する"
        ],
        answer: 0,
        explanation:
            "システム監査では独立した客観的な立場から情報システムの管理状況などを評価する。",
        keyword: "システム監査",
        keywordExplanation:
            "システム監査は、情報システムに関するリスクへの対応などを独立した立場から評価する活動である。",
        relatedWords: [
            "監査人",
            "内部統制",
            "リスク管理"
        ]
    },


    /* =====================================================
       ストラテジ系 39～50
    ===================================================== */

    {
        id: 39,
        category: "strategy",
        question: "SWOT分析におけるStrengthが表すものはどれか。",
        choices: [
            "強み",
            "弱み",
            "機会",
            "脅威"
        ],
        answer: 0,
        explanation:
            "Strengthは組織内部の強みを表す。",
        keyword: "SWOT分析",
        keywordExplanation:
            "SWOT分析は、強み・弱み・機会・脅威の4要素から経営環境を分析する手法である。",
        relatedWords: [
            "Strength",
            "Weakness",
            "Opportunity",
            "Threat"
        ]
    },

    {
        id: 40,
        category: "strategy",
        question: "PEST分析で対象となる要素の組合せとして適切なものはどれか。",
        choices: [
            "政治・経済・社会・技術",
            "製品・価格・流通・販売促進",
            "強み・弱み・機会・脅威",
            "人・物・金・情報"
        ],
        answer: 0,
        explanation:
            "PEST分析ではPolitical、Economic、Social、Technologicalの観点から外部環境を分析する。",
        keyword: "PEST分析",
        keywordExplanation:
            "PEST分析は政治・経済・社会・技術という四つの外部環境から企業を取り巻く状況を分析する手法である。",
        relatedWords: [
            "外部環境",
            "SWOT分析",
            "経営戦略"
        ]
    },

    {
        id: 41,
        category: "strategy",
        question: "マーケティングの4Pに含まれないものはどれか。",
        choices: [
            "Product",
            "Price",
            "Place",
            "People"
        ],
        answer: 3,
        explanation:
            "4PはProduct、Price、Place、Promotionである。",
        keyword: "4P",
        keywordExplanation:
            "4PはProduct、Price、Place、Promotionの四つからマーケティング施策を考える考え方である。",
        relatedWords: [
            "Product",
            "Price",
            "Promotion"
        ]
    },

    {
        id: 42,
        category: "strategy",
        question: "固定費が30万円、製品1個の販売価格が1,000円、変動費が400円のとき、損益分岐点販売数量は何個か。",
        choices: [
            "300個",
            "400個",
            "500個",
            "600個"
        ],
        answer: 2,
        explanation:
            "1個当たりの限界利益は1,000－400＝600円。300,000÷600＝500個となる。",
        keyword: "損益分岐点",
        keywordExplanation:
            "損益分岐点は売上高と費用が等しくなり、利益も損失も0になる点である。",
        relatedWords: [
            "固定費",
            "変動費",
            "限界利益"
        ]
    },

    {
        id: 43,
        category: "strategy",
        question: "100万円を投資して20万円の利益を得た場合、ROIは何%か。",
        choices: [
            "5%",
            "10%",
            "20%",
            "50%"
        ],
        answer: 2,
        explanation:
            "ROIは利益÷投資額×100なので、20万円÷100万円×100＝20%となる。",
        keyword: "ROI",
        keywordExplanation:
            "ROIはReturn on Investmentの略で、投資額に対してどれだけ利益を得たかを表す指標である。",
        relatedWords: [
            "投資",
            "利益",
            "経営指標"
        ]
    },

    {
        id: 44,
        category: "strategy",
        question: "RFPの説明として適切なものはどれか。",
        choices: [
            "発注側がベンダに具体的な提案を依頼する文書",
            "社員の給与明細",
            "データベースの設計図",
            "プログラムの実行ログ"
        ],
        answer: 0,
        explanation:
            "RFPはシステム導入などの際、発注側が候補となるベンダへ提案を依頼するための文書である。",
        keyword: "RFP",
        keywordExplanation:
            "RFPはRequest for Proposalの略で、提案依頼書を意味する。",
        relatedWords: [
            "ベンダ",
            "提案依頼書",
            "システム調達"
        ]
    },

    {
        id: 45,
        category: "strategy",
        question: "ERPの目的として最も適切なものはどれか。",
        choices: [
            "企業内の経営資源を統合的に管理する",
            "ネットワーク通信だけを監視する",
            "画像データだけを管理する",
            "個人のメールだけを保存する"
        ],
        answer: 0,
        explanation:
            "ERPでは会計、人事、生産、販売など企業内の情報や資源を統合的に管理する。",
        keyword: "ERP",
        keywordExplanation:
            "ERPはEnterprise Resource Planningの略で、企業全体の経営資源を統合的に管理する考え方やシステムである。",
        relatedWords: [
            "基幹システム",
            "経営資源",
            "業務統合"
        ]
    },

    {
        id: 46,
        category: "strategy",
        question: "CRMの目的として適切なものはどれか。",
        choices: [
            "顧客との関係を管理し、長期的な関係構築に活用する",
            "CPUの温度を管理する",
            "ネットワークケーブルを管理する",
            "プログラムだけを管理する"
        ],
        answer: 0,
        explanation:
            "CRMでは顧客情報や購買履歴などを活用して顧客との関係を強化する。",
        keyword: "CRM",
        keywordExplanation:
            "CRMはCustomer Relationship Managementの略で、顧客との関係を管理・強化する考え方である。",
        relatedWords: [
            "顧客管理",
            "マーケティング",
            "販売"
        ]
    },

    {
        id: 47,
        category: "strategy",
        question: "BCPの説明として最も適切なものはどれか。",
        choices: [
            "災害などの発生時にも重要業務を継続・早期復旧するための計画",
            "新商品の販売計画だけを示すもの",
            "社員の勤務表",
            "データベースのバックアップだけを示すもの"
        ],
        answer: 0,
        explanation:
            "BCPは災害や事故などが発生した場合にも重要業務を継続し、早期復旧するための計画である。",
        keyword: "BCP",
        keywordExplanation:
            "BCPはBusiness Continuity Planの略で、事業継続計画を意味する。",
        relatedWords: [
            "災害対策",
            "事業継続",
            "リスク管理"
        ]
    },

    {
        id: 48,
        category: "strategy",
        question: "著作権について適切な説明はどれか。",
        choices: [
            "著作物を創作した時点で原則として発生する",
            "必ず特許庁への登録が必要である",
            "企業だけが取得できる",
            "保護対象は発明だけである"
        ],
        answer: 0,
        explanation:
            "著作権は文章、画像、音楽、プログラムなどの著作物を創作した時点で原則として発生する。",
        keyword: "著作権",
        keywordExplanation:
            "著作権は著作物を創作した者に認められる権利である。",
        relatedWords: [
            "著作物",
            "知的財産権",
            "プログラム"
        ]
    },

    {
        id: 49,
        category: "strategy",
        question: "特許権の保護対象として最も適切なものはどれか。",
        choices: [
            "技術的な発明",
            "企業名そのものだけ",
            "小説の文章そのもの",
            "商品の販売価格"
        ],
        answer: 0,
        explanation:
            "特許制度では一定の要件を満たした技術的な発明を保護する。",
        keyword: "特許権",
        keywordExplanation:
            "特許権は一定の要件を満たした発明について、一定期間独占的に実施できる権利である。",
        relatedWords: [
            "発明",
            "知的財産権",
            "特許"
        ]
    },

    {
        id: 50,
        category: "strategy",
        question: "コンプライアンスの説明として最も適切なものはどれか。",
        choices: [
            "法令や社会的規範、社内規則などを守ること",
            "利益だけを最大化すること",
            "ネットワーク速度を高めること",
            "全ての業務を外部委託すること"
        ],
        answer: 0,
        explanation:
            "コンプライアンスでは法令だけでなく、企業倫理や社内規則などを含めて適切な行動を取ることが重要となる。",
        keyword: "コンプライアンス",
        keywordExplanation:
            "コンプライアンスは法令遵守を中心に、社会規範や企業倫理などを守って活動する考え方である。",
        relatedWords: [
            "法令遵守",
            "企業倫理",
            "内部統制"
        ]
    }

];