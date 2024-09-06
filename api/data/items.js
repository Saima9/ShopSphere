const fs = require('node:fs/promises');
const path = require('path')

async function getStoredItems() {
  const filepath = path.join(process.cwd(),'api/items.json')
  const rawFileContent = await fs.readFile(filepath, { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedItems = data.items ?? [];
  return storedItems;
}

function storeItems(items) {
  return fs.writeFile(filepath, JSON.stringify({ items: items || [] }));
}

exports.getStoredItems = getStoredItems;
exports.storeItems = storeItems;