const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ Oops! Node.js kamu masih jadul\n` +
    `   Versi sekarang : ${process.versions.node}\n` +
    `   Minimal        : Node.js 20+\n\n` +
    `   Upgrade dulu ya biar lancar ✨\n`
  );
  process.exit(1);
}
