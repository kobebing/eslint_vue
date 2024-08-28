export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "bug", // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        "feat", // 新功能（feature）
        "fix", // 修补bug
        "docs", // 文档（documentation）
        "style", // 格式（不影响代码运行的变动）
        "refactor", // 重构（即不是新增功能，也不是修改bug的代码变动）
        "test", // 增加测试
        "chore", // 构建过程或辅助工具的变动
        "revert", // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        "merge", // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
      ],
    ],
  },
  prompt: {
    messages: {
      type: "选择你要提交的类型 :",
      scope: "选择一个提交范围（可选）:",
      customScope: "请输入自定义的提交范围 :",
      subject: "填写简短精炼的变更描述 :\n",
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: "选择关联issue前缀（可选）:",
      customFooterPrefixs: "输入自定义issue前缀 :",
      footer: "列举关联issue (可选) 例如: #31, #I3244 :\n",
      confirmCommit: "是否提交或修改commit ?",
    },
    types: [
      { value: "feat: 特性", name: "特性:   🚀  新增功能", emoji: "🚀" },
      { value: "fix: 修复", name: "修复:   🧩  修复缺陷", emoji: "🧩" },
      { value: "docs: 文档", name: "文档:   📚  文档变更", emoji: "📚" },
      {
        value: "style: 格式",
        name: "格式:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）",
        emoji: "🎨",
      },
      {
        value: "refactor: 重构",
        name: "重构:   ♻️  代码重构（不包括 bug 修复、功能新增）",
        emoji: "♻️",
      },
      { value: "perf: 性能", name: "性能:   ⚡️  性能优化", emoji: "⚡️" },
      {
        value: "test: 测试",
        name: "测试:   ✅  添加疏漏测试或已有测试改动",
        emoji: "✅",
      },
      {
        value: "chore: 构建",
        name: "构建:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）",
        emoji: "📦️",
      },
      {
        value: "ci: 集成",
        name: "集成:   🎡  修改 CI 配置、脚本",
        emoji: "🎡",
      },
      { value: "revert: 回退", name: "回退:   ⏪️  回滚 commit", emoji: "⏪️" },
      { value: "build: 打包", name: "打包:   🔨  项目打包发布", emoji: "🔨" },
    ],
    useEmoji: true,
    themeColorCode: "",
    scopes: [],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: "bottom",
    customScopesAlias: "custom",
    emptyScopesAlias: "empty",
    upperCaseSubject: false,
    allowBreakingChanges: ["feat", "fix"],
    breaklineNumber: 100,
    breaklineChar: "|",
    skipQuestions: [],
    issuePrefixs: [
      { value: "closed", name: "closed:   ISSUES has been processed" },
    ],
    customIssuePrefixsAlign: "top",
    emptyIssuePrefixsAlias: "skip",
    customIssuePrefixsAlias: "custom",
    allowCustomIssuePrefixs: true,
    allowEmptyIssuePrefixs: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: "",
    defaultIssues: "",
    defaultScope: "",
    defaultSubject: "",
  },
};
