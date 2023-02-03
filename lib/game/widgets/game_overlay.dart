// Copyright 2022 The Flutter Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flame/game.dart';
import 'package:flutter/material.dart';

import '../doodle_dash.dart';
import 'widgets.dart';

class GameOverlay extends StatefulWidget {
  const GameOverlay(this.game, {super.key});

  final Game game;

  @override
  State<GameOverlay> createState() => GameOverlayState();
}

class GameOverlayState extends State<GameOverlay> {
  bool isPaused = false;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: Stack(
        children: [
          PositionedScoreDisplay(game: widget.game),
          PositionedPlayPauseButton(
            isPaused: isPaused,
            onPressed: () {
              (widget.game as DoodleDash).togglePauseState();
              setState(
                () {
                  isPaused = !isPaused;
                },
              );
            },
          ),
          Positioned(
            bottom: MediaQuery.of(context).size.height / 4,
            left: 24,
            child: GestureDetector(
              onTapDown: (details) {
                (widget.game as DoodleDash).player.moveLeft();
              },
              onTapUp: (details) {
                (widget.game as DoodleDash).player.resetDirection();
              },
              child: Material(
                color: Colors.transparent,
                elevation: 3.0,
                shadowColor: Theme.of(context).colorScheme.background,
                child: const Icon(Icons.arrow_left, size: 64),
              ),
            ),
          ),
          Positioned(
            bottom: MediaQuery.of(context).size.height / 4,
            right: 24,
            child: GestureDetector(
              onTapDown: (details) {
                (widget.game as DoodleDash).player.moveRight();
              },
              onTapUp: (details) {
                (widget.game as DoodleDash).player.resetDirection();
              },
              child: Material(
                color: Colors.transparent,
                elevation: 3.0,
                shadowColor: Theme.of(context).colorScheme.background,
                child: const Icon(Icons.arrow_right, size: 64),
              ),
            ),
          ),
          if (isPaused)
            Positioned(
              top: MediaQuery.of(context).size.height / 2 - 72.0,
              right: MediaQuery.of(context).size.width / 2 - 72.0,
              child: const Icon(
                Icons.pause_circle,
                size: 144.0,
                color: Colors.black12,
              ),
            ),
        ],
      ),
    );
  }
}

class PositionedScoreDisplay extends StatelessWidget {
  const PositionedScoreDisplay({required this.game, super.key});

  final Game game;

  @override
  Widget build(context) {
    return Positioned(
      top: 30,
      left: 30,
      child: ScoreDisplay(game: game),
    );
  }
}

class PositionedPlayPauseButton extends StatelessWidget {
  const PositionedPlayPauseButton(
      {required this.isPaused, required this.onPressed});

  final bool isPaused;
  final void Function() onPressed;

  @override
  Widget build(context) {
    return Positioned(
      top: 30,
      right: 30,
      child: ElevatedButton(
        child: isPaused
            ? const Icon(
                Icons.play_arrow,
                size: 48,
              )
            : const Icon(
                Icons.pause,
                size: 48,
              ),
        onPressed: onPressed,
      ),
    );
  }
}
