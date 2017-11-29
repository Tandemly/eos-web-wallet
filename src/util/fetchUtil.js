//@flow
/* global fetch */

export const rejectBadResponse = (response: Response): mixed =>
  response.ok || Promise.reject(response);

const defaultAppOptions = {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json"
  }
};

export const appRequest = async (path: string, options: mixed = {}) => {
  try {
    const resp = await fetch(path, {
      ...defaultAppOptions,
      ...options
    });
    await rejectBadResponse(resp);
    return resp.json();
  } catch (error) {
    return Promise.reject(await error.json());
  }
};

const apiHost: string = process.env.REACT_APP_API_URI || "";
const apiKey: string = process.env.REACT_APP_API_KEY || "";
const defaultApiOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${apiKey}`
  }
};

export const apiRequest = async (path: string, options: mixed = {}): any => {
  let resp;
  try {
    resp = await fetch(`${apiHost}${path}`, {
      ...defaultApiOptions,
      ...options
    });
    await rejectBadResponse(resp);
    // just grab as text (rather than check response headers for content type)
    let text = await resp.text();
    try {
      // attempt to parse as JSON
      return JSON.parse(text);
    } catch (error) {
      // Not json, format and return
      return {
        status: resp.status,
        text: resp.statusText,
        message: text
      };
    }
  } catch (error) {
    return Promise.reject(await error.json());
  }
};
