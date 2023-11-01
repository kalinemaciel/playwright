// @ts-check
const { test, expect } = require('@playwright/test');
const fs = require('fs');

test.beforeEach( async ({ page }) => {
  await page.goto('https://www.sabrinacarpenter.com');
  await page.getByLabel('Accept').click();
});

test('see the third email from top to bottom', async ({ page }) => {
  await page.getByRole('link', { name: 'inbox', exact: true }).click();
  await page.getByRole('link', { name: 'open envelope icon sabrina carpenter Nonsense (Remix) with Coi Leray out now 💞 10:00 AM' }).click();
  await page.locator('header').filter({ hasText: 'from: sabrina carpenter subject: Nonsense (Remix) with Coi Leray out now 💞' }).locator('b').click();
  await page.close();
});

test('open stream section e choose stream nonsense remix with coi leray', async ({ page }) => {
  await page.getByRole('link', { name: 'stream' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#post-472').getByRole('link', { name: 'stream' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'Spotify Play' }).click();
  await page1.getByTestId('action-bar-row').getByTestId('add-button').click();
  await page1.close();
});

test('open feather live from the emails i cant send tour', async ({ page }) => {
  await page.getByRole('link', { name: 'watch' }).click();
  await page.getByRole('link', { name: 'Watch Feather (Live from the emails i can’t send Tour)' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});

test('open the tour dates section and see information about tickets in Brazil', async ({ page }) => {
  await page.getByRole('link', { name: 'tour', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Nov 19, 2023 The Eras Tour Rio De Janeiro, Brazil TICKETS RSVP' }).getByRole('link').nth(3).click();
  const page1 = await page1Promise;
  await page1.locator('img').nth(1).click();
  await page1.close();
  await page.close();
});

test('open the store and put the feather vinyl in the cart ', async ({ page }) => {
  await page.getByRole('link', { name: 'tour', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'Nov 19, 2023 The Eras Tour Rio De Janeiro, Brazil TICKETS RSVP' }).getByRole('link').nth(3).click();
  const page1 = await page1Promise;
  await page1.locator('img').nth(1).click();
  await page1.close();
  await page.close();
});

test('subscribe to receive news by email', async ({ page }) => {
  const jsonData = fs.readFileSync('user.json', 'utf-8');
  const data = JSON.parse(jsonData);
  await page.getByRole('menuitem', { name: 'subscribe' }).locator('a').click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(data.email);
  await page.getByLabel('* choose country').selectOption('BR');
  await page.getByLabel('Sign up to receive email updates and offers from Sabrina Carpenter').check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('♡').click();
});

test('open all nonsense promotions and play the first video', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'nonsense', exact: true }).click();
  const page1 = await page1Promise;
  await page1.frameLocator('iframe >> nth=0').getByLabel('Play', { exact: true }).click();
  await page1.frameLocator('iframe >> nth=0').locator('video').click();
  await page1.frameLocator('.builder-blocks > .builder-block > div > div > iframe >> nth=0').getByLabel('Play', { exact: true }).click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.frameLocator('.builder-blocks > .builder-block > div > div > iframe >> nth=0').locator('div').filter({ hasText: 'Sabrina Carpenter - A Nonsense Christmas (Lyric Video)' }).nth(4).click();
  const page2 = await page2Promise;
  await page2.close();
  await page1.close();
  await page.close();
});

test('go to sabrinas instagram', async ({ page }) => {
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Instagram' }).click();
  const page1 = await page1Promise;
  await page1.getByText('sabrinacarpenterVerifiedFollowMessage').click();
  await page1.close();
  await page.close();
});