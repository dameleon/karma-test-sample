module.exports = function(config) {
  config.set({
    basePath: '',
    // 'browserify' を追加
    frameworks: ['mocha', 'browserify'],
    files: [
      // jQuery 使ってみるので jQuery を読み込む
      'bower_components/jquery/dist/jquery.min.js',
      // fixture として html を読み込みたいので、ここで指定する
      'test/fixtures/*.html',
      'src/**/*.js',
    ],
    exclude: [
    ],
    preprocessors: {
      '/**/*.browserify' : 'browserify',
      '**/*.html': 'html2js'
    },
    // browserify (karma-browserifast) の設定
    browserify: {
      // debug: true にしておけば SourceMap がはき出される
      debug: true,
      // テストファイルを配置したディレクトリを指定
      files: [
        'test/**/*.test.js'
      ],
      // 変換処理に espowerify を加える(ってことだと思う)
      transform: [
        'espowerify'
      ]
    },
    // レポーター形式の設定
    reporters: ['progress'],
    // テストのサーバを立ち上げるポート番号
    port: 9876,
    // コンソールに色つきで出力するかどうか
    colors: true,
    // ログレベル
    logLevel: config.LOG_INFO,
    // ファイル更新があった場合に自動でテストをするかどうか
    autoWatch: true,
    // 自動で開くブラウザを指定
    browsers: ['PhantomJS'],
    // 1回だけ実行するかどうか
    singleRun: false
  });
};
