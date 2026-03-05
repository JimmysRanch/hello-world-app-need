# Planning Guide

A minimal greeting application that displays "Hello World" with visual impact and personality.

**Experience Qualities**:
1. **Welcoming** - The interface should feel friendly and inviting with warm colors and approachable typography
2. **Playful** - Subtle animations and an energetic design create a sense of delight
3. **Bold** - Strong visual presence through confident typography and distinctive color choices

**Complexity Level**: Micro Tool (single-purpose application)
- This is a focused single-screen application that displays a greeting message with no interactive features or state management required.

## Essential Features

### Display Greeting Message
- **Functionality**: Shows "Hello World" prominently on screen
- **Purpose**: Serves as the primary content and focal point of the application
- **Trigger**: Automatically displayed on page load
- **Progression**: Page loads → Message appears with animation
- **Success criteria**: Text is clearly visible, properly styled, and animates smoothly on load

## Edge Case Handling

- **Different Screen Sizes**: Layout adapts gracefully from mobile to desktop with responsive text sizing
- **Reduced Motion Preferences**: Respects user's motion preferences by disabling animations when requested

## Design Direction

The design should evoke feelings of warmth, energy, and optimism - like a friendly greeting from someone you're happy to see. The aesthetic should be modern and confident without feeling sterile or corporate.

## Color Selection

A vibrant, energetic palette centered around warm sunset tones with strong contrast.

- **Primary Color**: Deep coral/salmon (oklch(0.65 0.18 25)) - Energetic and warm, communicates friendliness
- **Secondary Colors**: Rich plum background (oklch(0.25 0.08 320)) - Creates depth and makes the primary color pop
- **Accent Color**: Bright yellow-orange (oklch(0.80 0.15 65)) - Used sparingly for emphasis and visual spark
- **Foreground/Background Pairings**: 
  - Background (Deep Plum oklch(0.25 0.08 320)): Cream text (oklch(0.95 0.02 80)) - Ratio 11.2:1 ✓
  - Primary (Coral oklch(0.65 0.18 25)): White text (oklch(1 0 0)) - Ratio 5.1:1 ✓

## Font Selection

The typeface should feel modern, geometric, and confident - something with personality that stands out from typical system fonts.

- **Typographic Hierarchy**: 
  - H1 (Hello World): Space Grotesk Bold/72px/tight letter spacing (-0.02em)
  - Body text if needed: Space Grotesk Regular/18px/relaxed line height (1.6)

## Animations

Animations should enhance the greeting's welcoming feeling without being distracting.

The main "Hello World" text will fade in with a subtle scale and float effect, creating a gentle entrance that feels inviting. Motion will be purposeful - just enough to add life without overwhelming.

## Component Selection

- **Components**: Minimal component usage - primarily custom styled divs since this is a simple display application
- **Customizations**: Custom animated text display with gradient effects
- **States**: Single static state with entrance animation
- **Icon Selection**: None required for this simple greeting
- **Spacing**: Generous padding using Tailwind's spacing scale (p-8, gap-4) to create breathing room
- **Mobile**: Text scales down proportionally on smaller screens (from 72px to 48px), maintains centered layout with appropriate padding
