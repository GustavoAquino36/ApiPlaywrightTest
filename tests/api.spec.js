// @ts-check
import { test, expect } from '@playwright/test';

test('deve retornar lista de breeds válida', async ({ request }) => {
  const response = await request.get("https://dog.ceo/api/breeds/list/all");

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.status).toBe("success");
  expect(body.message).toBeTruthy();
  expect(typeof body.message).toBe("object");

  const breeds = Object.keys(body.message);
  expect(breeds.length).toBeGreaterThan(0);

  for (const breed of breeds) {
    expect(Array.isArray(body.message[breed])).toBe(true);
  }
});



test('deve retornar erro para breed inválida', async ({ request }) => {
  const response = await request.get("https://dog.ceo/api/breed/invalidbreed/images");
  const body = await response.json()

  expect(response.status()).toBe(404); // vai ser 404 dado que a URL contém "invalidbreed" no lugar da breed
  expect(body.status).toBe("error");
  expect(body.message).toContain("Breed not found");
});



test('deve retornar imagens para breed fixa', async ({ request }) => {
  const response = await request.get("https://dog.ceo/api/breed/hound/images");
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.status).toBe("success");

  expect(Array.isArray(body.message)).toBe(true);
  expect(body.message.length).toBeGreaterThan(0);

  for (const img of body.message) {
    expect(img).toContain("http");
    expect(img).toMatch(/\.(jpg|jpeg|png)$/);
  }
});

test('deve retornar imagens para breed Dinamica', async ({ request }) => {
  const listResponse = await request.get("https://dog.ceo/api/breeds/list/all");
  const listBody = await listResponse.json();

  const breeds = Object.keys(listBody.message);
  const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];

  const response = await request.get(`https://dog.ceo/api/breed/${randomBreed}/images`);
  const body = await response.json();

  console.log(`Breed usada: ${randomBreed}`);

  expect(Array.isArray(body.message)).toBe(true);
  expect(body.message.length).toBeGreaterThan(0);

  for (const img of body.message) {
    expect(img).toContain("http");
    expect(img).toMatch(/\.(jpg|jpeg|png)$/);
  }
  expect(response.status()).toBe(200);
  expect(body.status).toBe("success");
});



test('deve retornar imagem aleatória válida', async ({ request }) => {
  const response = await request.get("https://dog.ceo/api/breeds/image/random");
  const body = await response.json();

  expect(response.status()).toBe(200);
  expect(body.status).toBe("success");

  expect(body.message).toContain("http");
  expect(body.message).toMatch(/\.(jpg|jpeg|png)$/);
});