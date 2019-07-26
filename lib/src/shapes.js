"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var raylib_1 = require("./bindings/raylib");
exports.DrawPixel = raylib_1.default.DrawPixel; //Draw a pixel 
exports.DrawPixelV = raylib_1.default.DrawPixelV; //Draw a pixel (Vector version) 
exports.DrawLine = raylib_1.default.DrawLine; //Draw a line 
exports.DrawLineV = raylib_1.default.DrawLineV; //Draw a line (Vector version) 
exports.DrawLineEx = raylib_1.default.DrawLineEx; //Draw a line defining thickness 
exports.DrawLineBezier = raylib_1.default.DrawLineBezier; //Draw a line using cubic-bezier curves in-out 
exports.DrawLineStrip = raylib_1.default.DrawLineStrip; //Draw lines sequence 
exports.DrawCircle = raylib_1.default.DrawCircle; //Draw a color-filled circle 
exports.DrawCircleSector = raylib_1.default.DrawCircleSector; //Draw a piece of a circle 
exports.DrawCircleSectorLines = raylib_1.default.DrawCircleSectorLines; //Draw circle sector outline 
exports.DrawCircleGradient = raylib_1.default.DrawCircleGradient; //Draw a gradient-filled circle 
exports.DrawCircleV = raylib_1.default.DrawCircleV; //Draw a color-filled circle (Vector version) 
exports.DrawCircleLines = raylib_1.default.DrawCircleLines; //Draw circle outline 
exports.DrawRing = raylib_1.default.DrawRing; //Draw ring 
exports.DrawRingLines = raylib_1.default.DrawRingLines; //Draw ring outline 
exports.DrawRectangle = raylib_1.default.DrawRectangle; //Draw a color-filled rectangle 
exports.DrawRectangleV = raylib_1.default.DrawRectangleV; //Draw a color-filled rectangle (Vector version) 
exports.DrawRectangleRec = raylib_1.default.DrawRectangleRec; //Draw a color-filled rectangle 
exports.DrawRectanglePro = raylib_1.default.DrawRectanglePro; //Draw a color-filled rectangle with pro parameters 
exports.DrawRectangleGradientV = raylib_1.default.DrawRectangleGradientV; //Draw a vertical-gradient-filled rectangle 
exports.DrawRectangleGradientH = raylib_1.default.DrawRectangleGradientH; //Draw a horizontal-gradient-filled rectangle 
exports.DrawRectangleGradientEx = raylib_1.default.DrawRectangleGradientEx; //Draw a gradient-filled rectangle with custom vertex colors 
exports.DrawRectangleLines = raylib_1.default.DrawRectangleLines; //Draw rectangle outline 
exports.DrawRectangleLinesEx = raylib_1.default.DrawRectangleLinesEx; //Draw rectangle outline with extended parameters 
exports.DrawRectangleRounded = raylib_1.default.DrawRectangleRounded; //Draw rectangle with rounded edges 
exports.DrawRectangleRoundedLines = raylib_1.default.DrawRectangleRoundedLines; //Draw rectangle with rounded edges outline 
exports.DrawTriangle = raylib_1.default.DrawTriangle; //Draw a color-filled triangle 
exports.DrawTriangleLines = raylib_1.default.DrawTriangleLines; //Draw triangle outline 
exports.DrawTriangleFan = raylib_1.default.DrawTriangleFan; //Draw a triangle fan defined by points 
exports.DrawPoly = raylib_1.default.DrawPoly; //Draw a regular polygon (Vector version) 
exports.SetShapesTexture = raylib_1.default.SetShapesTexture; //Define default texture used to draw shapes 
exports.CheckCollisionRecs = raylib_1.default.CheckCollisionRecs; //Check collision between two rectangles 
exports.CheckCollisionCircles = raylib_1.default.CheckCollisionCircles; //Check collision between two circles 
exports.CheckCollisionCircleRec = raylib_1.default.CheckCollisionCircleRec; //Check collision between circle and rectangle 
exports.GetCollisionRec = raylib_1.default.GetCollisionRec; //Get collision rectangle for two rectangles collision 
exports.CheckCollisionPointRec = raylib_1.default.CheckCollisionPointRec; //Check if point is inside rectangle 
exports.CheckCollisionPointCircle = raylib_1.default.CheckCollisionPointCircle; //Check if point is inside circle 
exports.CheckCollisionPointTriangle = raylib_1.default.CheckCollisionPointTriangle; //Check if point is inside a triangle 